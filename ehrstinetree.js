// document.addEventListener('gesturestart', function (e) {
//     e.preventDefault();
// });

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
          html: `<h2 for="${id}">${editElement.label}</h2>
                        <h1 ${rDisabledAttr} ${rOnlyAttr} id="${id}" name="${id}" style="width: 100%;height: 100px;" data-binding="${editElement.binding}">${value}</h1>`,
          id: id,
          value: value
    };

};

FamilyTree.templates.john.field_1 = "<text " + FamilyTree.attr.width + '="150" style="font-size: 0px;" fill="#aeaeae" x="60" y="150" text-anchor="middle">{val}</text>';

var family = new FamilyTree(document.getElementById("tree"),{
  // mode: "dark",
  // orientation: "bottom",
  subtreeSeparation: 300,
  scaleInitial: FamilyTree.match.boundary,
  template: "john",
  editForm: {
        buttons: {
          edit: null
        },
        addMore: null,
        generateElementsFromFields: false,
        elements: [
            { type: 'myTextArea', label: 'email:', binding: 'email' }
        ]
    },
  nodeBinding: {
    field_0: "name",
    field_1: "email",
    img_0: "img"
  },
  menu: {
            pdf: { text: "Export PDF" },
            png: { text: "Export PNG" },
            svg: { text: "Export SVG" },
            csv: { text: "Export CSV" },
            json: { text: "Export JSON" }
        },

});


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
      { id: 1, pids: [2], gender: "female", img: "photos/meemaw.jpg", name: "Blenna D Widger"},
      { id: 2, pids: [1], gender: "male", img: "photos/elza.jpg", name: "Elza Elroy Ehrstine"},
        { id: 3, pids: [4], divorced: [4], mid: 1, fid: 2, gender: "female", phone: "test", img: "photos/shirley.jpg", name: "Shirley Ann Ehrstine"},
        { id: 4, pids: [3], divorced: [3], gender: "male", img: "photos/dave.jpg", name: "David Howard Harden"},
          { id: 6, pids: [5], gender: "female", img: "photos/lisa.jpg", name: "Lisa Kay Stoianoff"},
          { id: 5, pids: [6], mid: 3, fid: 4, gender: "male", img: "photos/john-david.jpg", name: "John David Harden"},
            { id: 7, pids: [8], mid: 5, fid: 6, gender: "female", img: "photos/lauren.jpg", name: "Lauren Ashley Harden"},
            { id: 8, pids: [7], gender: "male", img: "photos/eric.jpg", name: "Eric Walter Linam"},
              { id: 9, mid: 7, fid: 8, gender: "female", img: "photos/ady.jpg", name: "Adalyn Kay Linam"},
              { id: 10, mid: 7, fid: 8, gender: "female", img: "photos/emy.jpg", name: "Emelia Rose Linam"},
            { id: 11, mid: 5, fid: 6, gender: "male", email: "wes.numbfuzz@gmail.com", img: "photos/1.jpg", name: "John Wesley Harden"},
            { id: 12,pids: [13], mid: 5, fid: 6, gender: "female", img: "photos/hannah.jpg", name: "Hannah Rose Harden"},
            { id: 13, pids: [14], gender: "male", img: "photos/kevin.jpg", name: "Kevin Michael Puninske"},
          { id: 14, pids: [15], mid: 3, fid: 4, gender: "female", img: "photos/meri.jpg", name: "Merilynne Sue Harden"},
          { id: 15, pids: [14], gender: "male", img: "photos/steve.jpg", name: "Stephen Jon Rush"},
            { id: 20, pids: [16,17], divorced: [17], mid: 14, fid: 15, gender: "female", img: "photos/ruthemma.jpg", name: "Ruthemma Joy Rush"},
            { id: 16, pids: [20], divorced: [], gender: "male", img: "photos/david-thomas.jpg", name: "David Thomas Wells"},
              { id: 19, mid: 20, fid: 16, gender: "female", img: "photos/rush.jpg", name: "Rush Lonnie Wells"},
            { id: 17, pids: [20], divorced: [20], gender: "male", img: "photos/thomas.jpg", name: "Thomas Ellison"},
              { id: 18, mid: 20, fid: 17, gender: "male", img: "photos/matthew.jpg", name: "Matthew Thomas Ellison"},
              { id: 21, mid: 20, fid: 17, gender: "female", img: "photos/celeste.jpg", name: "Celeste Joy Ellison"},
            { id: 22, pids: [23], gender: "female", img: "photos/carrie.jpg", name: "Carrie Marie Vesper"},
            { id: 23, pids: [22], mid: 14, fid: 15, gender: "male", img: "photos/peter.jpg", name: "Peter Josiah Rush"},
              { id: 24, mid: 22, fid: 23, gender: "female", img: "photos/lizzy.jpg", name: "Elizabeth Marie Rush"},
              { id: 25, mid: 22, fid: 23, gender: "female", img: "photos/josie.jpg", name: "Josephine Patricia Rush"},
              { id: 26, mid: 22, fid: 23, gender: "female", img: "photos/rosie.jpg", name: "Rosina Alexandra Rush"},
          { id: 27, pids: [28], mid: 3, fid: 4, gender: "female", img: "photos/juli.jpg", name: "Julianne Joy Harden"},
          { id: 28, pids: [27], gender: "male", img: "photos/john-lewis.jpg", name: "John Lewis Bartholomew"},
            { id: 29, mid: 27, fid: 28, gender: "female", img: "photos/marta.jpg", name: "Marta Joy Bartholomew"},
        { id: 30, pids: [31], divorced: [31], gender: "female", img: "photos/sue.jpg", name: "Sue Ellen Fryer"},
        { id: 31, pids: [30], divorced: [30], mid: 1, fid: 2, gender: "male", img: "photos/duke.jpg", name: "John Widger Ehrstine"},
          { id: 32, pids: [33], gender: "female", img: "photos/karen.jpg", name: "Karen Jeanne Horlacher"},
          { id: 33, pids: [32], mid: 30, fid: 31, gender: "male", img: "photos/ethan.jpg", name: "Ethan Andrew Ehrstine"},
            { id: 34, mid: 32, fid: 33, gender: "female", img: "photos/esther.jpg", name: "Esther Michelle Ehrstine"},
            { id: 35, mid: 32, fid: 33, gender: "male", img: "photos/caleb.jpg", name: "Caleb Ethan Ehrstine"},
          { id: 36, pids: [37], mid: 30, fid: 31, gender: "female", img: "photos/anne.jpg", name: "Anne Elizabeth Ehrstine"},
          { id: 37, pids: [36], gender: "male", img: "photos/kraig.jpg", name: "Kraig Gary Oman"},
            { id: 38, mid: 36, fid: 37, gender: "male", img: "photos/alex.jpg", name: "Alexander Ryan Oman"},
            { id: 39, mid: 36, fid: 37, gender: "female", img: "photos/claire.jpg", name: "Claire Ellen Oman"},
            { id: 40, mid: 36, fid: 37, gender: "male", img: "photos/miles.jpg", name: "Miles Andrew Oman"},
          { id: 41, pids: [42], divorced: [42], mid: 30, fid: 31, gender: "female", img: "photos/amy.jpg", name: "Amy Margaret Ehrstine"},
          { id: 42, pids: [41], gender: "male", divorced: [41], img: "photos/stephen.jpg", name: "Stephen Warren Ellisor"},
            { id: 43, mid: 41, fid: 42, gender: "female", img: "photos/margaret.jpg", name: "Margaret Grace Ellisor"},
    ]
  );
