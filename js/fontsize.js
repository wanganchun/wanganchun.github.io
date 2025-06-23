function setFontSize(size) {
    const validSizes = ['small', 'normal', 'large'];
    if (!validSizes.includes(size)) return;

    // �u�w�靈 .resizable-text �����������r��j�p
    const textContainers = document.querySelectorAll('.resizable-text');
    textContainers.forEach(container => {
        container.classList.remove(...validSizes);
        container.classList.add(size);
    });
}

// �������J�ɧP�_�O�_�b�Ĥ@�h��Ƨ��]�Ҧp URL path �O�_�u���@�h�^
// �p�G�O�Ĥ@�h�A�h����ܦr��j�p����]���]����� id="font-size-controller"�^
document.addEventListener('DOMContentLoaded', () => {
    const pathSegments = window.location.pathname.split('/').filter(seg => seg.length > 0);
    // pathSegments[0] �O�Ĥ@�h��Ƨ����ɦW
    // ���]�Ĥ@�h�����O�ڥؿ��Υu���@�h��Ƨ�
    if (pathSegments.length <= 1) {
        const controller = document.getElementById('font-size-controller');
        if (controller) controller.style.display = 'none'; // ���ñ��
    }
});
