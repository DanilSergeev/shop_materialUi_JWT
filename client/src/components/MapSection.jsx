import { Typography } from '@mui/material';
import { YMaps, Map } from '@pbe/react-yandex-maps';

export default function MapSection() {
    return (
        <section>
            <YMaps>
                <div className='map' id="contacts">
                    <div className='mapBox'>
                        <Typography fontSize={14} gutterBottom variant="h6" letterSpacing={1.5} component="p" sx={{opacity: 0.6}}>КОНТАКТЫ</Typography>
                        <Typography gutterBottom variant="h4" component="p">Мы ждем вас по адресу:</Typography>
                        <Typography style={{fontFamily: "system-ui"}} gutterBottom variant="p" lineHeight={1.6} component="p">
                            Великий Новгород, ул.Ленина, 121. <br/>
                            E-mail: eatVkystno@gmail.com<br/>
                            Телефон: 8 800 300 06 00 отдела продаж <br/>
                            Контактное лицо: Степанов В.И.
                        </Typography>
                    </div>
                    <Map defaultState={{ center: [55.496177, 49], zoom: 5 }} height="550px" width="100%" />
                </div>
            </YMaps>
        </section>
    )
}