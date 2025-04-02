const fs = require('fs');

const put = "C:\\Users\\Admin\\Desktop\\FS_L3\\WWW.txt";
function write(put, str) {
    try {
        fs.writeFileSync(put, str, 'utf8');
        console.log('Запись файла завершена');
        read(put);
    } catch (error) {
        throw error;
    }
}
function read(put) {
    try {
        const data = fs.readFileSync(put, 'utf8');
        console.log("Данные с файла: ", data);
    } catch (error) {
        throw error;
    }
}
function clear(put) {
    try {
        fs.writeFileSync(put, '', 'utf8');
        console.log('Содержимое файла удалено');
    } catch (error) {
        throw error;
    }
}
function del(put) {
    try {
        fs.unlinkSync(put);
        console.log('Файл удален');
    } catch (error) {
        throw error;
    }
}

write(put, "Я Лера из Т-319");
read(put);
clear(put);
write(put, "Очистка прошла успешно");
read(put);
del(put);
