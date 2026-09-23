import zlib, struct, os

def png(path, size, draw):
    w = h = size
    rows = b""
    for y in range(size):
        rows += b"\x00"
        for x in range(size):
            rows += bytes(draw(x, y, size))
    def chunk(tag, data):
        c = struct.pack(">I", len(data)) + tag + data
        return c + struct.pack(">I", zlib.crc32(tag + data) & 0xffffffff)
    sig = b"\x89PNG\r\n\x1a\n"
    ihdr = struct.pack(">IIBBBBB", w, h, 8, 2, 0, 0, 0)
    idat = zlib.compress(rows, 9)
    with open(path, "wb") as f:
        f.write(sig + chunk(b"IHDR", ihdr) + chunk(b"IDAT", idat) + chunk(b"IEND", b""))

NAVY = (15, 20, 31)
GOLD = (255, 209, 102)
DARK = (31, 41, 58)

def draw(x, y, size):
    cx = cy = size / 2.0
    r = size * 0.42
    d = ((x - cx) ** 2 + (y - cy) ** 2) ** 0.5
    if d <= r:
        return GOLD
    if d <= r * 1.0:
        return GOLD
    return NAVY

def draw_ring(x, y, size):
    cx = cy = size / 2.0
    r_o = size * 0.40
    r_i = size * 0.28
    d = ((x - cx) ** 2 + (y - cy) ** 2) ** 0.5
    if r_i <= d <= r_o:
        return GOLD
    if d < r_i:
        return DARK
    return NAVY

os.makedirs("icons", exist_ok=True)
png("icons/icon-192.png", 192, draw_ring)
png("icons/icon-512.png", 512, draw_ring)
png("icons/apple-touch-icon.png", 180, draw_ring)
png("icons/favicon.png", 64, draw_ring)
print("icons written:", os.listdir("icons"))