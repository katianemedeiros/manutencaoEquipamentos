package ordensservico.demo.Processos;

import ordensservico.demo.erro.erros;
import ordensservico.demo.model.ordemCompra;
import ordensservico.demo.repositorio.repositorioOrdens;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@RestController
@RequestMapping("ordens")
public class OrdemProcesso {

    private final repositorioOrdens ordensDao;

    @Autowired
    public OrdemProcesso(repositorioOrdens ordensDao) {
        this.ordensDao =  ordensDao;
    }
    @CrossOrigin
    @GetMapping
    public ResponseEntity<?> listarTodos (){
        return new ResponseEntity<>(ordensDao.findAll(), HttpStatus.OK);

    }
    @CrossOrigin
    @GetMapping(path = "/{id}")
    public ResponseEntity<?> listarOrdemPeloNome (@PathVariable("id") Long id){
        Optional<ordemCompra> ordem = ordensDao.findById (id);
        if (ordem == null)
            return new ResponseEntity<>(new erros("Ordem nao encontrada"), HttpStatus.NOT_FOUND);
         return new ResponseEntity<>(ordem, HttpStatus.OK);
    }
    @CrossOrigin
    @GetMapping(path = "/procurarNome/{nome}")
    public ResponseEntity <?> listarNome (@PathVariable ("nome") String nome) {
        return new ResponseEntity<>(ordensDao.findByNomeIgnoreCaseContaining(nome), HttpStatus.OK);
    }

    @CrossOrigin
    @PostMapping
    public ResponseEntity<?> salvar (@RequestBody ordemCompra ordem){
        return new ResponseEntity<>(ordensDao.save(ordem), HttpStatus.OK);
    }

    @CrossOrigin
    @DeleteMapping (path = "/{id}")
    public ResponseEntity<?> remover(@PathVariable Long id){
        ordensDao.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @CrossOrigin
    @PutMapping
    public ResponseEntity<?> alterar (@RequestBody ordemCompra ordem){
        ordensDao.save(ordem);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}

