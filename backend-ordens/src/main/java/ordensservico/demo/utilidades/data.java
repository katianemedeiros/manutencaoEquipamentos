package ordensservico.demo.utilidades;

import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Component
public class data {
    public String formatarData (LocalDateTime dataLocal) {
        return DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(dataLocal);
    }
}
