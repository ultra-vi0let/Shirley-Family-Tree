FamilyTree.elements.myTextArea = function (data, editElement, minWidth, readOnly) {
    var id = FamilyTree.elements.generateId();
    var value = data[editElement.binding];
    if (value == undefined) value = '';
    if (readOnly && !value) {
        return {
            html: ''
        };
    }
    var rOnlyAttr = readOnly ? 'readonly' : '';
    var rDisabledAttr = readOnly ? 'disabled' : '';
    return {
        html: `<label for="${id}">${editElement.label}</label>
                      <textarea ${rDisabledAttr} ${rOnlyAttr} id="${id}" name="${id}" style="width: 100%;height: 100px;" data-binding="${editElement.binding}">${value}</textarea>`,
        id: id,
        value: value
    };

};

var family = new FamilyTree(document.getElementById("tree"),{
  // mode: "dark",
  scaleInitial: FamilyTree.match.boundary,
  template: "john",
  editForm: {
        addMore: null,
        generateElementsFromFields: false,
        elements: [
            { type: 'myTextArea', label: 'Name:', binding: 'name' },
            { type: 'myTextArea', label: 'Phone:', binding: 'phone' }
        ]
    },
  nodeBinding: {
    field_0: "name",
    field_1: "phone"
  }});


family.on('render-link', function (sender, args) {
var cnodeData = family.get(args.cnode.id);
var nodeData = family.get(args.node.id);
  if (cnodeData.divorced != undefined && nodeData.divorced != undefined &&
    cnodeData.divorced.includes(args.node.id) && nodeData.divorced.includes(args.cnode.id)) {
    console.log(args.html);
    args.html = args.html.replace("path", "path stroke-dasharray='1, 2' stroke-width='1'");
  }
});

family.load( [
      { id: 1, pids: [2], gender: "female", name: "Blenna D Widger"},
      { id: 2, pids: [1], gender: "male", name: "Elza Elroy Ehrstine"},
        { id: 3, pids: [4], divorced: [4], mid: 1, fid: 2, gender: "female", phone: "test", name: "Shirley Ann Ehrstine"},
        { id: 4, pids: [3], divorced: [3], gender: "male", name: "David Howard Harden"},
          { id: 6, pids: [5], gender: "female", name: "Lisa Kay Harden"},
          { id: 5, pids: [6], mid: 3, fid: 4, gender: "male", name: "John David Harden"},
            { id: 7, pids: [8], mid: 5, fid: 6, gender: "female", name: "Lauren Ashley Harden"},
            { id: 8, pids: [7], gender: "male", name: "Eric Walter Linam"},
              { id: 9, mid: 7, fid: 8, gender: "female", name: "Adalyn Kay Linam"},
              { id: 10, mid: 7, fid: 8, gender: "female", name: "Emilia Rose Linam"},
            { id: 11, mid: 5, fid: 6, gender: "male", name: "John Wesley Harden"},
            { id: 12,pids: [13], mid: 5, fid: 6, gender: "female", name: "Hannah Rose Harden"},
            { id: 13, pids: [14], gender: "male", name: "Kevin Michael Puninske"},
          { id: 14, pids: [15], mid: 3, fid: 4, gender: "female", name: "Merilynne Sue Harden"},
          { id: 15, pids: [14], gender: "male", name: "Stephen Jon Rush"},
            { id: 16, pids: [17], divorced: [17], name: "Thomas Ellison"},
            { id: 17, pids: [16,20], divorced: [16], mid: 14, fid: 15, gender: "female", name: "Ruthemma Joy Rush"},
              { id: 18, mid: 17, fid: 16, gender: "male", name: "Matthew Thomas Ellison"},
              { id: 19, mid: 17, fid: 16, gender: "female", name: "Celeste Joy Ellison"},
            { id: 20, pids: [17], gender: "male", name: "David Thomas Wells"},
              { id: 21, mid: 17, fid: 20, gender: "male", name: "Rush Lonnie Wells"},
            { id: 22, pids: [23], gender: "female", name: "Carrie Mariue Vesper"},
            { id: 23, pids: [22], mid: 14, fid: 15, gender: "male", name: "Peter Josiah Rush"},
              { id: 24, mid: 22, fid: 23, gender: "female", name: "Elizabeth Marie Rush"},
              { id: 25, mid: 22, fid: 23, gender: "female", name: "Josephine Patricia Rush"},
              { id: 26, mid: 22, fid: 23, gender: "female", name: "Rosina Alexandra Rush"},
          { id: 27, pids: [28], mid: 3, fid: 4, gender: "female", name: "Julianne Joy Harden"},
          { id: 28, pids: [27], gender: "male", name: "John Lewis Bartholomew"},
            { id: 29, mid: 27, fid: 28, gender: "female", name: "Marta Joy Bartholomew"},
        { id: 30, pids: [31], divorced: [31], gender: "female", name: "Sue Ellen Fryer"},
        { id: 31, pids: [30], divorced: [30], mid: 1, fid: 2, gender: "male", name: "John Widger Ehrstine"},
          { id: 32, pids: [33], gender: "female", name: "Karen Jeanne Horlacher"},
          { id: 33, pids: [32], mid: 30, fid: 31, gender: "male", name: "Ethan Andrew Ehrstine"},
            { id: 34, mid: 32, fid: 33, gender: "female", name: "Esther Michelle Ehrstine"},
            { id: 35, mid: 32, fid: 33, gender: "male", name: "Caleb Ethan Ehrstine"},
          { id: 36, pids: [37], mid: 30, fid: 31, gender: "female", name: "Anne Elizabeth Ehrstine"},
          { id: 37, pids: [36], gender: "male", name: "Kraig Gary Oman"},
            { id: 38, mid: 36, fid: 37, gender: "male", name: "Alexander Ryan Oman"},
            { id: 39, mid: 36, fid: 37, gender: "female", name: "Claire Ellen Oman"},
            { id: 40, mid: 36, fid: 37, gender: "male", name: "Miles Andrew Oman"},
          { id: 41, pids: [42], divorced: [42], mid: 30, fid: 31, gender: "female", name: "Amy Margaret Ehrstine"},
          { id: 42, pids: [41], divorced: [41], name: "Stephen Warren Ellisor"},
            { id: 43, mid: 41, fid: 42, gender: "female", name: "Margaret Grace Ellisor"},
    ]
  );
