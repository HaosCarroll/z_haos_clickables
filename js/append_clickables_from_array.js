var clickable_script_urls = [
    ["Setup Haos Bash on Cloud9!", "EntropyHaos/4617f56f010f0b476f0aa969574794a3"],
    ["Setup Java Spark Framework on Cloud9.", "EntropyHaos/69ecc48cd9dd4d7d224a9addc0e16a84"],
    ["Create Reveal.JS GH-Pages site using Cloud9.", "EntropyHaos/f5571a1430d5eec65055afbfb7358c62"]
];

function create_clickable_element_for_url(script_num_in, label_for_clickable_url, url_for_clickable) {

    var frag = document.createDocumentFragment();
    var temp = document.createElement('div');

    var insert_string = "";

    insert_string += '  <div id="clickable_command_div_' + script_num_in + '">';
    insert_string += '    <label for="clickable_command_label_' + script_num_in + '">' + label_for_clickable_url + '</label>';
    insert_string += '    <input type="text" id="clickable_command_' + script_num_in + '" value="bash <(curl -s https://gist.githubusercontent.com/' + url_for_clickable + '/raw)" />';
    insert_string += '    <button id="script_preview_button_' + script_num_in + '"  onclick=" window.open(\'https://gist.github.com/' + url_for_clickable + '\',\'_blank\')">View Gist</button>';
    insert_string += '    <button data-copytarget="#clickable_command_' + script_num_in + '">copy</button>';
    insert_string += '  </div>';
    //insert_string += '  <div id="clickable_command_script_preview_' + script_num_in + '">';
    //insert_string += '      <script src="https://gist.github.com/' + url_for_clickable + '.js"></script>';
    //insert_string += '  </div>';

    temp.innerHTML = insert_string;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
}

var num_of_clickables = clickable_script_urls.length;

for (var i = 0; i < num_of_clickables; i++) {
    var script_num = i + 1;
    var fragment = create_clickable_element_for_url(script_num, clickable_script_urls[i][0], clickable_script_urls[i][1]);
    document.getElementById("clickable_scripts_outer_div").appendChild(fragment);
}
