package ordensservico.demo.repositorio;

import ordensservico.demo.model.ordemCompra;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface repositorioOrdens extends CrudRepository<ordemCompra, Long> {
    List<ordemCompra> findByNomeIgnoreCaseContaining (String nome);
}
