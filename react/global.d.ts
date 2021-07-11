/*
React projects that don't include the DOM library need these interfaces to compile.
React Native applications use React, but there is no DOM available. The JavaScript runtime
is ES6/ES2015 only. These definitions allow such projects to compile with only `--lib ES6`.

Warning: all of these interfaces are empty. If you want type definitions for various properties
(such as HTMLInputElement.prototype.value), you need to add `--lib DOM` (via command line or tsconfig.json).
*/

interface เหตุการณ์ { }
interface เหตุการณ์เคลื่อนไหว extends เหตุการณ์ { }
interface เหตุการณ์คลิปบอร์ด extends เหตุการณ์ { }
interface เหตุการณ์องค์ประกอบ extends เหตุการณ์ { }
interface เหตุการณ์การลาก extends เหตุการณ์ { }
interface เหตุการณ์เพ่งเล่ง extends เหตุการณ์ { }
interface เหตุการณ์แป้นพิมพ์ extends เหตุการณ์ { }
interface เหตุการณ์เมาส์ extends เหตุการณ์ { }
interface เหตุการณ์สัมผัส extends เหตุการณ์ { }
interface เหตุการณ์ตัวชี้ extends เหตุการณ์ { }
interface เหตุการณ์การเปลี่ยนแปลง extends เหตุการณ์ { }
interface เหตุการณ์หน้าจอผู้ใช้ extends เหตุการณ์ { }
interface เหตุการณ์ล้อ extends เหตุการณ์ { }

interface เป้าหมายเหตุการณ์ { }
interface เอกสาร { }
interface เคลื่อนย้ายไฟล์ { }
interface สื่อการออกแบบ { }

interface ธาตุ { }
interface เอกสารธาตุ { }

interface ธาตุเอชทีเอ็มแอล extends ธาตุ { }
interface สมอธาตุเอชทีเอ็มแอล extends ธาตุเอชทีเอ็มแอล { }
interface พื้นที่ธาตุเอชทีเอ็มแอล extends ธาตุเอชทีเอ็มแอล { }
interface เสียงธาตุเอชทีเอ็มแอล extends ธาตุเอชทีเอ็มแอล { }
interface พื้นฐานธาตุเอชทีเอ็มแอล extends ธาตุเอชทีเอ็มแอล { }
interface ร่างกายธาตุเอชทีเอ็มแอล extends ธาตุเอชทีเอ็มแอล { }
interface เว้นบรรทัดธาตุเอชทีเอ็มแอล extends ธาตุเอชทีเอ็มแอล { }
interface ปุ่มธาตุเอชทีเอ็มแอล extends ธาตุเอชทีเอ็มแอล { }
interface ภาพวาดธาตุเอชทีเอ็มแอล extends ธาตุเอชทีเอ็มแอล { }
interface ข้อมูลธาตุเอชทีเอ็มแอล extends ธาตุเอชทีเอ็มแอล { }
interface รายการข้อมูลธาตุเอชทีเอ็มแอล extends ธาตุเอชทีเอ็มแอล { }
interface โต้ตอบธาตุเอชทีเอ็มแอล extends ธาตุเอชทีเอ็มแอล { }
interface ดิปธาตุเอชทีเอ็มแอล extends ธาตุเอชทีเอ็มแอล { }
interface รายการดีธาตุเอชทีเอ็มแอล extends ธาตุเอชทีเอ็มแอล { }
interface ฝังธาตุเอชทีเอ็มแอล extends ธาตุเอชทีเอ็มแอล { }
interface ตั้งข้อมูลธาตุเอชทีเอ็มแอล extends ธาตุเอชทีเอ็มแอล { }
interface แบบฟอร์มธาตุเอชทีเอ็มแอล extends ธาตุเอชทีเอ็มแอล { }
interface หัวเรื่องธาตุเอชทีเอ็มแอล extends ธาตุเอชทีเอ็มแอล { }
interface หัวธาตุเอชทีเอ็มแอล extends ธาตุเอชทีเอ็มแอล { }
interface เส้นใต้ธาตุเอชทีเอ็มแอล extends ธาตุเอชทีเอ็มแอล { }
interface เอชทีเอ็มแอลธาตุเอชทีเอ็มแอล extends ธาตุเอชทีเอ็มแอล { }
interface ไอเฟรมธาตุเอชทีเอ็มแอล extends ธาตุเอชทีเอ็มแอล { }
interface รูปภาพธาตุเอชทีเอ็มแอล extends ธาตุเอชทีเอ็มแอล { }
interface ข้อมูลนำเข้าธาตุเอชทีเอ็มแอล extends ธาตุเอชทีเอ็มแอล { }
interface แก้ไขธาตุเอชทีเอ็มแอล extends ธาตุเอชทีเอ็มแอล { }
interface ฉลากธาตุเอชทีเอ็มแอล extends ธาตุเอชทีเอ็มแอล { }
interface ตำนานธาตุเอชทีเอ็มแอล extends ธาตุเอชทีเอ็มแอล { }
interface ข้อมูลรายการธาตุเอชทีเอ็มแอล extends ธาตุเอชทีเอ็มแอล { }
interface ลิงค์ธาตุเอชทีเอ็มแอล extends ธาตุเอชทีเอ็มแอล { }
interface แผนที่ธาตุเอชทีเอ็มแอล extends ธาตุเอชทีเอ็มแอล { }
interface เมต้าธาตุเอชทีเอ็มแอล extends ธาตุเอชทีเอ็มแอล { }
interface สิ่งของธาตุเอชทีเอ็มแอล extends ธาตุเอชทีเอ็มแอล { }
interface รายการเรียงธาตุเอชทีเอ็มแอล extends ธาตุเอชทีเอ็มแอล { }
interface กลุ่มตัวเลือกธาตุเอชทีเอ็มแอล extends ธาตุเอชทีเอ็มแอล { }
interface ตัวเลือกธาตุเอชทีเอ็มแอล extends ธาตุเอชทีเอ็มแอล { }
interface ย่อหน้าธาตุเอชทีเอ็มแอล extends ธาตุเอชทีเอ็มแอล { }
interface ปรมธาตุเอชทีเอ็มแอล extends ธาตุเอชทีเอ็มแอล { }
interface ก่อนหน้าธาตุเอชทีเอ็มแอล extends ธาตุเอชทีเอ็มแอล { }
interface การดำเนินการธาตุเอชทีเอ็มแอล extends ธาตุเอชทีเอ็มแอล { }
interface อ้างคำพูดธาตุเอชทีเอ็มแอล extends ธาตุเอชทีเอ็มแอล { }
interface ช่องธาตุเอชทีเอ็มแอล extends ธาตุเอชทีเอ็มแอล { }
interface ต้นฉบับธาตุเอชทีเอ็มแอล extends ธาตุเอชทีเอ็มแอล { }
interface เลือกธาตุเอชทีเอ็มแอล extends ธาตุเอชทีเอ็มแอล { }
interface แหล่งที่มาธาตุเอชทีเอ็มแอล extends ธาตุเอชทีเอ็มแอล { }
interface ระยะธาตุเอชทีเอ็มแอล extends ธาตุเอชทีเอ็มแอล { }
interface สไลต์ธาตุเอชทีเอ็มแอล extends ธาตุเอชทีเอ็มแอล { }
interface ตารางธาตุเอชทีเอ็มแอล extends ธาตุเอชทีเอ็มแอล { }
interface คอลัมน์ธาตุเอชทีเอ็มแอล extends ธาตุเอชทีเอ็มแอล { }
interface เซลล์ตารางข้อมูลธาตุเอชทีเอ็มแอล extends ธาตุเอชทีเอ็มแอล { }
interface เซลล์หัวเรื่องตารางข้อมูลธาตุเอชทีเอ็มแอล extends ธาตุเอชทีเอ็มแอล { }
interface แถวตารางธาตุเอชทีเอ็มแอล extends ธาตุเอชทีเอ็มแอล { }
interface ส่วนตารางธาตุเอชทีเอ็มแอล extends ธาตุเอชทีเอ็มแอล { }
interface แม่แบบธาตุเอชทีเอ็มแอล extends ธาตุเอชทีเอ็มแอล { }
interface พื้นที่ข้อความธาตุเอชทีเอ็มแอล extends ธาตุเอชทีเอ็มแอล { }
interface หัวข้อธาตุเอชทีเอ็มแอล extends ธาตุเอชทีเอ็มแอล { }
interface รางธาตุเอชทีเอ็มแอล extends ธาตุเอชทีเอ็มแอล { }
interface ไม่เรียงรายการธาตุเอชทีเอ็มแอล extends ธาตุเอชทีเอ็มแอล { }
interface วิดีโอธาตุเอชทีเอ็มแอล extends ธาตุเอชทีเอ็มแอล { }
interface หน้าเว็บธาตุเอชทีเอ็มแอล extends ธาตุเอชทีเอ็มแอล { }

interface ธาตุเอสวีจี extends ธาตุ { }
interface เอสวีจีธาตุเอสวีจี extends ธาตุเอสวีจี { }
interface วงกลมธาตุเอสวีจี extends ธาตุเอสวีจี { }
interface คลิปธาตุเอสวีจี extends ธาตุเอสวีจี { }
interface คำนิยามธาตุเอสวีจี extends ธาตุเอสวีจี { }
interface รายละเอียดธาตุเอสวีจี extends ธาตุเอสวีจี { }
interface วงรีธาตุเอสวีจี extends ธาตุเอสวีจี { }
interface ผสมผสานธาตุเอสวีจีเอฟอีบี extends ธาตุเอสวีจี { }
interface เมทริกซ์ตารางธาตุเอสวีจีเอฟอีบี extends ธาตุเอสวีจี { }
interface ย้ายส่วนประกอบธาตุเอสวีจีเอฟอีบี extends ธาตุเอสวีจี { }
interface คอมโพสิตธาตุเอสวีจีเอฟอีบี extends ธาตุเอสวีจี { }
interface หมุนเมทริกซ์ธาตุเอสวีจีเอฟอีบี extends ธาตุเอสวีจี { }
interface กระจายแสงธาตุเอสวีจีเอฟอีบี extends ธาตุเอสวีจี { }
interface แผนที่การกระจัดธาตุเอสวีจีเอฟอีบี extends ธาตุเอสวีจี { }
interface แสงไกลธาตุเอสวีจีเอฟอีบี extends ธาตุเอสวีจี { }
interface เงาธาตุเอสวีจีเอฟอีบี extends ธาตุเอสวีจี { }
interface ท่วมธาตุเอสวีจีเอฟอีบี extends ธาตุเอสวีจี { }
interface ฟังค์ชั่นเอธาตุเอสวีจีเอฟอีบี extends ธาตุเอสวีจี { }
interface ฟังค์ชั่นบีธาตุเอสวีจีเอฟอีบี extends ธาตุเอสวีจี { }
interface ฟังค์ชั่นจีธาตุเอสวีจีเอฟอีบี extends ธาตุเอสวีจี { }
interface ฟังค์ชั่นเออาร์ธาตุเอสวีจีเอฟอีบี extends ธาตุเอสวีจี { }
interface ฟังค์ชั่นเอธาตุเอสวีจีเอฟอีบีธาตุเอสวีจีเอฟอีบี extends ธาตุเอสวีจี { }
interface ภาพธาตุเอสวีจีเอฟอีบี extends ธาตุเอสวีจี { }
interface หลอมรวมธาตุเอสวีจีเอฟอีบี extends ธาตุเอสวีจี { }
interface หลอมรวมโหนดธาตุเอสวีจีเอฟอีบี extends ธาตุเอสวีจี { }
interface การหลอมรวมธาตุเอสวีจีเอฟอีบี extends ธาตุเอสวีจี { }
interface ตำแหน่งธาตุเอสวีจีเอฟอีบี extends ธาตุเอสวีจี { }
interface จุดของแสงธาตุเอสวีจีเอฟอีบี extends ธาตุเอสวีจี { }
interface แสงพิเศษธาตุเอสวีจีเอฟอีบี extends ธาตุเอสวีจี { }
interface สปอตไลท์ธาตุเอสวีจีเอฟอีบี extends ธาตุเอสวีจี { }
interface กระเบื้องธาตุเอสวีจีเอฟอีบี extends ธาตุเอสวีจี { }
interface ความปั่นป่วนธาตุเอสวีจีเอฟอีบี extends ธาตุเอสวีจี { }
interface กรองธาตุเอสวีจีเอฟอีบี extends ธาตุเอสวีจี { }
interface วิเทศธาตุเอสวีจีเอฟอีบี extends ธาตุเอสวีจี { }
interface ธาตุเอสวีจีจี extends ธาตุเอสวีจี { }
interface ภาพธาตุเอสวีจี extends ธาตุเอสวีจี { }
interface เส้นธาตุเอสวีจี extends ธาตุเอสวีจี { }
interface การไล่ระดับสีเชิงเส้นธาตุเอสวีจี extends ธาตุเอสวีจี { }
interface เตรื่องหมายธาตุเอสวีจี extends ธาตุเอสวีจี { }
interface หน้ากากธาตุเอสวีจี extends ธาตุเอสวีจี { }
interface ข้อมูลเมต้าธาตุเอสวีจี extends ธาตุเอสวีจี { }
interface ทางธาตุเอสวีจี extends ธาตุเอสวีจี { }
interface รูปแบบธาตุเอสวีจี extends ธาตุเอสวีจี { }
interface รูปหลายเหลี่ยมธาตุเอสวีจี extends ธาตุเอสวีจี { }
interface โพลีไลน์ธาตุเอสวีจี extends ธาตุเอสวีจี { }
interface การไล่ระดับสีแบบรัศมีธาตุเอสวีจี extends ธาตุเอสวีจี { }
interface สีเหลียมธาตุเอสวีจี extends ธาตุเอสวีจี { }
interface หยุดธาตุเอสวีจี extends ธาตุเอสวีจี { }
interface สวิตซ์ธาตุเอสวีจี extends ธาตุเอสวีจี { }
interface สัญลักษณ์ธาตุเอสวีจี extends ธาตุเอสวีจี { }
interface ข้อความธาตุเอสวีจี extends ธาตุเอสวีจี { }
interface ทางข้อความธาตุเอสวีจี extends ธาตุเอสวีจี { }
interface ระยะทีธาตุเอสวีจี extends ธาตุเอสวีจี { }
interface ใช้ธาตุเอสวีจี extends ธาตุเอสวีจี { }
interface ดูธาตุเอสวีจี extends ธาตุเอสวีจี { }

interface ข้อความ { }
interface รายการสัมผัส { }
interface บริบทการเรนเดอร์เว็บจีแอล { }
interface บริบทการเรนเดอร์เว็บจีแอลสอง { }
