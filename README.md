# คีย์บิล — ห้องอาหาร TIH

หน้าเว็บไอคอนสำหรับระบบคีย์บิลห้องอาหาร โรงพยาบาลไทยอินเตอร์เนชั่นแนล พะงัน

## วิธีติดตั้ง (สำหรับเจ้าของระบบ)

### 1. สร้าง GitHub Repository

1. สมัคร GitHub ที่ https://github.com (ฟรี)
2. กด **New repository**
3. ชื่อ repo: `tih-restaurant` (หรืออะไรก็ได้)
4. เลือก **Public**
5. กด **Create repository**

### 2. อัพโหลดไฟล์

อัพโหลด 4 ไฟล์เข้า repo:

- `index.html`
- `manifest.json`
- `icon.png` ← ดาวน์โหลดไอคอนจาก Google Drive ของคุณ → ตั้งชื่อเป็น `icon.png`
- `README.md` (ไฟล์นี้)

วิธีอัพ: กด **Add file → Upload files** → ลากไฟล์ทั้งหมดมาวาง → **Commit changes**

### 3. เปิด GitHub Pages

1. ใน repo → **Settings** → **Pages**
2. **Source**: Deploy from branch
3. **Branch**: `main` / `(root)` → **Save**
4. รอ 1-2 นาที จะได้ URL: `https://USERNAME.github.io/tih-restaurant/`

### 4. ติดตั้งบนมือถือ

เปิด URL ใน Chrome/Safari → "เพิ่มลงในหน้าจอหลัก" → ไอคอนจะขึ้นถูกต้อง 100%

กดไอคอน → หน้าโหลด → redirect ไป Apps Script อัตโนมัติ

---

## แก้ URL Apps Script

ในไฟล์ `index.html` หาบรรทัดนี้:

```js
var APP_URL = 'https://script.google.com/macros/s/.../exec?page=entry';
```

เปลี่ยนเป็น URL Web App ของคุณ (ถ้า deploy ใหม่)
