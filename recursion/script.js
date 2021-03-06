const response = ["HI", ["That's", "My", ['First', 'JavaScript code']], "!!!", "=)", ['Thanks for', ['Your attention!']]];

function createArray() {

    function createList(arr, ul) {

        for (let i = 0; i < arr.length; i++) {

            if (arr[i] instanceof Array) {

                let btn = document.createElement('input');
                btn.className = 'toggle';
                btn.setAttribute('identification', 'inner_' + id);
                btn.type = 'button';
                btn.value = 'Open';
                ul.appendChild(btn);

                const innerUl = document.createElement('ul');
                innerUl.id = 'inner_' + id;
                id = ++id;
                createList(arr[i], innerUl);
                ul.appendChild(innerUl);
            } else {
                const li = document.createElement('li');
                li.appendChild(document.createTextNode(arr[i]));
                ul.appendChild(li);
            }
        }
    }

    let id = 1;
    const ul = document.createElement('ul');
    ul.id = "parent_ul";
    createList(response, ul);

    document.body.appendChild(ul);
    let x = document.getElementsByClassName('toggle');

    function showHide() {

        let element_attribute = this.getAttribute('identification');
        let element_id = document.getElementById(element_attribute);

        if (element_id.style.display == "none") {
            element_id.style.display = "block";
        } else {
            element_id.style.display = "none";
        }
    }

    for (let j = 0; j < x.length; j++) {
        x[j].addEventListener('click', showHide);
    }
}

createArray();

