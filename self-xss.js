window.onload = function(){
    console.log("%c警告", "color: red;background-color: yellow;font-size: 2rem;");
    console.log("%cこのコンソールを使用すると、\nSelf-XSS と呼ばれる手法を使って\nあなたになりすました攻撃者によって\n個人情報が騙し取られる可能性があります。\nよくわからないコードは、\n入力したり貼り付けたりしないでください。", "background-color: yellow;font-size: 1rem;");
};