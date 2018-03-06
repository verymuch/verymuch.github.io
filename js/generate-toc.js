$(window).ready(() => {
  // 生成目录容器
  const $article = $(".article");
  const $tocContainer = $("<div></div>").addClass("custom-toc-container");
  const $img = $("<img>").attr({
    src: "https://p0.ssl.qhimg.com/t01b4b55a270cdc08a6.png"
  });
  $img.appendTo($tocContainer);
  $tocContainer.appendTo($article);

  // 根据文章内容，为二级标题生成目录
  const headers = $("h2,h3", $article);
  const headersArr = [...headers];
  const $toc = $("<ul></ul>").addClass("custom-toc");
  headersArr.forEach(header => {
    const headerText = $(header).text();
    const hash = $("span", header).attr("id");
    const className =
      header.tagName === "H2" ? "custom-toc--h2" : "custom-toc--h3";
    const $newLink = $("<a></a>")
      .attr("href", `#${hash}`)
      .html($(header).text());
    const $newLi = $("<li></li>").addClass(className);
    $newLink.appendTo($newLi);
    $newLi.appendTo($toc);
  });
  $toc.appendTo($tocContainer);
});
