/*const productList= [
    {
        id: "01", name: "Intel Core i3 12100F", price: 1500000, img : "../assets/images/i3_12100f.jpg"
    },
    {
        id: "02", name: "Intel Core i5 12400F", price: 2500000, img: "../assets/images/i5_12400f.jpg"
    },
    {
        id: "03", name: "Intel Core i5 14400", price: 4000000, img: "../assets/images/i5_14400.png"
    },
    {
        id: "04", name: "Intel Core i7 14700KF", price: 5600000, img: "../assets/images/i7_14700kf.jpg"
    },
    {
        id: "05", name: "Intel Core Ultra 9 285", price: 7000000, img: "../assets/images/core_ultra_9_285.jpg"
    },
    {
        id: "06", name: "Ryzen 3 4100", price: 1250000, img: "../assets/images/ryzen_3_4100.jpg"
    },
    {
        id: "07", name: "Ryzen 5 5500GT", price: 2000000, img: "../assets/images/ryzen_5_5500gt.jpg"
    },
    {
        id: "08", name: "Ryzen 5 5600X3D", price: 2499000, img: "../assets/images/ryzen_5_5600x3d.jpg"
    },
    {
        id: "09", name: "Ryzen 7 7800X3D", price: 5600000, img: "../assets/images/ryzen_7_7800x3d.jpg"
    },
    {
        id: "10", name: "Ryzen Threadripper 7980X", price: 12499000, img: "../assets/images/threadripper_7980x.jpg"
    },
];*/
const productList = [
    {
        id: "01", 
        name: "Intel Core i3 12100F", 
        price: 1500000, 
        img: "../assets/images/i3_12100f.jpg",
        desc: "Ngày sản xuất: Q1/2022 | Số nhân/luồng: 4 Nhân / 8 Luồng | Tốc độ CPU: 3.3 GHz (Turbo 4.3 GHz) | Socket: LGA 1700"
    },
    {
        id: "02", 
        name: "Intel Core i5 12400F", 
        price: 2500000, 
        img: "../assets/images/i5_12400f.jpg",
        desc: "Ngày sản xuất: Q1/2022 | Số nhân/luồng: 6 Nhân / 12 Luồng | Tốc độ CPU: 2.5 GHz (Turbo 4.4 GHz) | Socket: LGA 1700"
    },
    {
        id: "03", 
        name: "Intel Core i5 14400", 
        price: 4000000, 
        img: "../assets/images/i5_14400.png",
        desc: "Ngày sản xuất: Q1/2024 | Số nhân/luồng: 10 Nhân / 16 Luồng | Tốc độ CPU: 2.5 GHz (Turbo 4.7 GHz) | Socket: LGA 1700"
    },
    {
        id: "04", 
        name: "Intel Core i7 14700KF", 
        price: 5600000, 
        img: "../assets/images/i7_14700kf.jpg",
        desc: "Ngày sản xuất: Q4/2023 | Số nhân/luồng: 20 Nhân / 28 Luồng | Tốc độ CPU: 3.4 GHz (Turbo 5.6 GHz) | Socket: LGA 1700"
    },
    {
        id: "05", 
        name: "Intel Core Ultra 9 285", 
        price: 7000000, 
        img: "../assets/images/core_ultra_9_285.jpg",
        desc: "Ngày sản xuất: Q4/2024 | Số nhân/luồng: 24 Nhân / 24 Luồng | Tốc độ CPU: 2.5 GHz (Turbo 5.5 GHz) | Socket: LGA 1851"
    },
    {
        id: "06", 
        name: "Ryzen 3 4100", 
        price: 1250000, 
        img: "../assets/images/ryzen_3_4100.jpg",
        desc: "Ngày sản xuất: Q2/2022 | Số nhân/luồng: 4 Nhân / 8 Luồng | Tốc độ CPU: 3.8 GHz (Turbo 4.0 GHz) | Socket: AM4"
    },
    {
        id: "07", 
        name: "Ryzen 5 5500GT", 
        price: 2000000, 
        img: "../assets/images/ryzen_5_5500gt.jpg",
        desc: "Ngày sản xuất: Q1/2024 | Số nhân/luồng: 6 Nhân / 12 Luồng | Tốc độ CPU: 3.6 GHz (Turbo 4.4 GHz) | Socket: AM4"
    },
    {
        id: "08", 
        name: "Ryzen 5 5600X3D", 
        price: 2499000, 
        img: "../assets/images/ryzen_5_5600x3d.jpg",
        desc: "Ngày sản xuất: Q3/2023 | Số nhân/luồng: 6 Nhân / 12 Luồng | Tốc độ CPU: 3.3 GHz (Turbo 4.4 GHz) | Socket: AM4"
    },
    {
        id: "09", 
        name: "Ryzen 7 7800X3D", 
        price: 5600000, 
        img: "../assets/images/ryzen_7_7800x3d.jpg",
        desc: "Ngày sản xuất: Q2/2023 | Số nhân/luồng: 8 Nhân / 16 Luồng | Tốc độ CPU: 4.2 GHz (Turbo 5.0 GHz) | Socket: AM5"
    },
    {
        id: "10", 
        name: "Ryzen Threadripper 7980X", 
        price: 12499000, 
        img: "../assets/images/threadripper_7980x.jpg",
        desc: "Ngày sản xuất: Q4/2023 | Số nhân/luồng: 64 Nhân / 128 Luồng | Tốc độ CPU: 3.2 GHz (Turbo 5.1 GHz) | Socket: sTR5"
    },
];

function addProduct(product,parentElement){
    const myDiv = document.createElement("div");
    myDiv.setAttribute("class","col-sm-3 border border-1");
    const image = document.createElement("img");
    image.setAttribute("src",product.img);
    image.setAttribute("class","image-property");
    image.setAttribute("alt",product.name);
    myDiv.appendChild(image);
    const smalldiv = document.createElement("div");
    const title = document.createElement("h4");
    title.append(product.name);
    smalldiv.appendChild(title);
    const Gia = document.createElement("p");
    Gia.append("Giá: "+product.price.toLocaleString("vi-VN")+"đ");
    smalldiv.appendChild(Gia);
    myDiv.appendChild(smalldiv);
    const Detailbtn = document.createElement("a");
    Detailbtn.setAttribute("class","btn btn-info");
    Detailbtn.setAttribute("href","../html/detail.html?id="+product.id);
    Detailbtn.append("Xem chi tiết");
    myDiv.appendChild(Detailbtn);
    parentElement.appendChild(myDiv);
};

function loadProduct(products){
    const container = document.createElement("div");
    container.setAttribute("class", "container");
    const row = document.createElement("div");
    row.setAttribute("class", "row ms-1 gx-3 gy-3");
    for(let i=0; i<products.length; i++){
        addProduct(products[i], row);
    }
    container.appendChild(row);
    document.body.appendChild(container);
}

function showProductDetail() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');

    const product = productList.find(p => p.id === id);

    if (product) {
        document.getElementById("d-img").src = product.img;
        document.getElementById("d-name").innerText = product.name;
        document.getElementById("d-price").innerText = "Giá: " + product.price.toLocaleString('vi-VN') + " ₫";
        document.getElementById("d-desc").innerHTML = product.desc.split("|").join("<br>");
    } else {
        document.body.innerHTML = "<div class='container mt-5'><h1>Không tìm thấy sản phẩm!</h1><a href='page7.html'>Quay lại</a></div>";
    }
}