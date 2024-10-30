<script>
function selectRow(row) {
    document.querySelectorAll('.form-row').forEach(function(r) {
        r.classList.remove('selected');
    });
    row.classList.add('selected');
}
</script>