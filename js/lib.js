function addProduct(id,name,price,img){
    const New = document.createElement("div");
    const Id = document.createElement("input");
        Id.setAttribute("type","text");
        Id.setAttribute("placeholder","Mã 3 chữ số,VD:00x");
        Id.setAttribute("maxlength","3");
    New.appendChild(Id);
    const Name = document.createElement("input");
        Name.setAttribute("type","text");
        Name.setAttribute("placeholder","Tên sản phẩm");
    New.appendChild(Name);
    const Price = document.createElement("input");
        Price.setAttribute("type","number");
        Price.setAttribute("min","10000");
        Price.setAttribute("step","5000");
        Price.setAttribute("placeholder","Giá")
    New.appendChild(Price);
    const ImgBtn = document.createElement("input");
        ImgBtn.setAttribute("type","file");
        ImgBtn.setAttribute("id","btnImg");
        ImgBtn.setAttribute("accept","image/*");
        ImgBtn.setAttribute("value","Upload Image");
    New.appendChild(ImgBtn);
    const subBtn = document.createElement("input");
        subBtn.setAttribute("type","submit");
    New.appendChild(subBtn);
    document.getElementById("product-list").appendChild(New);
};

const productlist= [
    {
        id: "001", name: "Pepsi", price : 12000, img : "../assets/images/pepsi.jpg"
    },
    {
        id: "002", name: "CocaCola", price: 13000, img: "https://product.hstatic.net/1000282430/product/nuoc-ngot-coca-cola-nhat-500ml_9c3f793688484f1083b46f8e8d46fbd0.jpg"
    },
    {
        id: "003", name: "7Up", price: 14000, img: "https://product.hstatic.net/1000301274/product/_10100996__7up_320ml_sleek_lon_0366766c074a4b538595ed8d91dc6b0d.png"
    }
];

function loadallProduct(){
    for(let i = 0; i<productlist.length; i++){
        addProduct(productlist[i].id,productlist[i].name,productlist[i].price,productlist[i].img);
    }
}
