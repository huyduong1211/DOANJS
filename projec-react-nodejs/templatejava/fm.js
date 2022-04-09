function loadlistcate() {

    $.ajax({
        url: "http://localhost:8081/Lab_01/getcategorymanager",
        type: "GET",
        success: function (valuert) {
            var table = $('#tb-cate')
                .dataTable(
                    {
                        data: valuert,
                        columns: [
                            { data: "tenLMH" },
                            { data: "tenHangSX" },
                            {
                                data: 'maLMH',
                                render: function (data,
                                    type) {
                                    if (type === 'display') {
                                        let isr = '<input class="but-action" type="button" value="Sửa"/>'
                                            + '<input class="but-action" type="button" value="Xóa">';
                                        return isr;
                                    }
                                    return data;
                                }
                            }
                        ],
                        "language": {
                            "sProcessing": "Đang xử lý...",
                            "sLengthMenu": "Xem _MENU_ mục",
                            "sZeroRecords": "Không tìm thấy dòng nào phù hợp",
                            "sInfo": "Đang xem _START_ đến _END_ trong tổng số _TOTAL_ mục",
                            "sInfoEmpty": "Đang xem 0 đến 0 trong tổng số 0 mục",
                            "sInfoFiltered": "(được lọc từ _MAX_ mục)",
                            "sInfoPostFix": "",
                            "sSearch": "Tìm:",
                            "sUrl": "",
                            "oPaginate": {
                                "sFirst": "Đầu",
                                "sPrevious": "Trước",
                                "sNext": "Tiếp",
                                "sLast": "Cuối"
                            }
                        },
                        "processing": true,
                        "aLengthMenu": [
                            [5, 10, 20, 50],
                            [5, 10, 20, 50]],
                        "order": [[1, 'desc']]
                    });

        }

    });

}