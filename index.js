const medicos = [
    {
      nome: 'Leticia',
      sobrenome: 'Costana',
      genero: 'feminino',
      imagemPerfil: 'http://placekitten.com/400/400'
    },
    {
      nome: 'Adimaldo',
      sobrenome: 'Pinto',
      genero: 'masculino',
      imagemPerfil: 'http://placekitten.com/401/401'
    },
    {
      nome: 'Noah',
      sobrenome: 'Lutus',
      genero: 'nao-binario',
      imagemPerfil: 'http://placekitten.com/402/402'
    },
  ];
  
  htmlList = document.querySelector('#medicos');
  apresentacao = ``;
  
  for(let medico of medicos){
    let img = document.createElement('img');
    img.src = medico.imagemPerfil;
    htmlList.appendChild(img);
  
    let p = document.createElement('p');
    p.src = medico.genero;
    htmlList.appendChild(p);
  
    switch(medico.genero){
      case 'nao-binario':
            apresentacao = `Dr(e). ${medico.nome} ${medico.sobrenome}`;
            break;
        case 'feminino':
            apresentacao = `Dr(a). ${medico.nome} ${medico.sobrenome}`;
            break;
        case 'masculino':
            apresentacao = `Dr. ${medico.nome} ${medico.sobrenome}`;
           break;
        
    }
    p = document.createElement('p');
    p.textContent = apresentacao;
    htmlList.appendChild(p);
  }