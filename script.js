//hide empty server and li
$(".half-server > li,.half-bottom-server > li,.full-server > li,.server").each(function() {
if(!$.trim($(this).html())) {
     $(this).css("visibility","hidden");
}
});