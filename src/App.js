import React, {Component} from 'react';
import { YMaps, Map, GeoObject, Clusterer, Placemark, ObjectManager, withYMaps } from 'react-yandex-maps';

const features = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature", 
            "id": 0, 
            "geometry": {"type": "Point", "coordinates": [55.831903, 37.411961]}, 
            "properties": {
                "balloonContentHeader": "<font size=3><b><span>Метка</span></b></font>", 
                "balloonContentBody": "", 
                "balloonContentFooter": "", 
                "clusterCaption": "Метка",
                "hintContent": ""
            }
        },
        {"type": "Feature", "id": 1, "geometry": {"type": "Point", "coordinates": [55.763338, 37.565466]}, "properties": {"balloonContentHeader": "<font size=3><b><span>Метка</span></b></font>", "balloonContentBody": "", "balloonContentFooter": "", "clusterCaption": "Метка", "hintContent": ""}},
        {"type": "Feature", "id": 2, "geometry": {"type": "Point", "coordinates": [55.763338, 37.565466]}, "properties": {"balloonContentHeader": "<font size=3><b><span>Метка</span></b></font>", "balloonContentBody": "<input type='submit' value='Выбрать метку'>", "balloonContentFooter": "", "clusterCaption": "Метка", "hintContent": ""}},
        {"type": "Feature", "id": 3, "geometry": {"type": "Point", "coordinates": [55.744522, 37.616378]}, "properties": {"balloonContentHeader": "<font size=3><b><span>Метка</span></b></font>", "balloonContentBody": "<input type='submit' value='Выбрать метку'>", "balloonContentFooter": "", "clusterCaption": "Метка", "hintContent": ""}},
        {"type": "Feature", "id": 4, "geometry": {"type": "Point", "coordinates": [55.780898, 37.642889]}, "properties": {"balloonContentHeader": "<font size=3><b><span>Метка</span></b></font>", "balloonContentBody": "<input type='submit' value='Выбрать метку'>", "balloonContentFooter": "", "clusterCaption": "Метка", "hintContent": ""}},
        {"type": "Feature", "id": 5, "geometry": {"type": "Point", "coordinates": [55.793559, 37.435983]}, "properties": {"balloonContentHeader": "<font size=3><b><span>Метка</span></b></font>", "balloonContentBody": "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p>" +
        "<button id='button' class='button'>Test</button></p>", "balloonContentFooter": "", "clusterCaption": "Метка", "hintContent": ""}},
        {"type": "Feature", "id": 6, "geometry": {"type": "Point", "coordinates": [55.800584, 37.675638]}, "properties": {"balloonContentHeader": "<font size=3><b><span>Метка</span></b></font>", "balloonContentBody": "<input type='submit' value='Выбрать метку'>", "balloonContentFooter": "", "clusterCaption": "Метка", "hintContent": ""}},
        {"type": "Feature", "id": 12, "geometry": {"type": "Point", "coordinates": [55.78085, 37.75021]}, "properties": {"balloonContentHeader": "<font size=3><b><span>Метка</span></b></font>", "balloonContentBody": "<input type='submit' value='Выбрать метку'>", "balloonContentFooter": "", "clusterCaption": "Метка", "hintContent": ""}},
        {"type": "Feature", "id": 20, "geometry": {"type": "Point", "coordinates": [55.698261, 37.730838]}, "properties": {"balloonContentHeader": "<font size=3><b><span>Метка</span></b></font>", "balloonContentBody": "<input type='submit' value='Выбрать метку'>", "balloonContentFooter": "", "clusterCaption": "Метка", "hintContent": ""}},
        {"type": "Feature", "id": 21, "geometry": {"type": "Point", "coordinates": [55.6338, 37.564769]}, "properties": {"balloonContentHeader": "<font size=3><b><span>Метка</span></b></font>", "balloonContentBody": "<input type='submit' value='Выбрать метку'>", "balloonContentFooter": "", "clusterCaption": "Метка", "hintContent": ""}},
        {"type": "Feature", "id": 22, "geometry": {"type": "Point", "coordinates": [55.639996, 37.5394]}, "properties": {"balloonContentHeader": "<font size=3><b><span>Метка</span></b></font>", "balloonContentBody": "<input type='submit' value='Выбрать метку'>", "balloonContentFooter": "", "clusterCaption": "Метка", "hintContent": ""}},
        {"type": "Feature", "id": 23, "geometry": {"type": "Point", "coordinates": [55.69023, 37.405853]}, "properties": {"balloonContentHeader": "<font size=3><b><span>Метка</span></b></font>", "balloonContentBody": "<input type='submit' value='Выбрать метку'>", "balloonContentFooter": "", "clusterCaption": "Метка", "hintContent": ""}},
        {"type": "Feature", "id": 24, "geometry": {"type": "Point", "coordinates": [55.77597, 37.5129]}, "properties": {"balloonContentHeader": "<font size=3><b><span>Метка</span></b></font>", "balloonContentBody": "<input type='submit' value='Выбрать метку'>", "balloonContentFooter": "", "clusterCaption": "Метка", "hintContent": ""}},
        {"type": "Feature", "id": 25, "geometry": {"type": "Point", "coordinates": [55.775777, 37.44218]}, "properties": {"balloonContentHeader": "<font size=3><b><span>Метка</span></b></font>", "balloonContentBody": "<input type='submit' value='Выбрать метку'>", "balloonContentFooter": "", "clusterCaption": "Метка", "hintContent": ""}},
        {"type": "Feature", "id": 26, "geometry": {"type": "Point", "coordinates": [55.811814, 37.440448]}, "properties": {"balloonContentHeader": "<font size=3><b><span>Метка</span></b></font>", "balloonContentBody": "<input type='submit' value='Выбрать метку'>", "balloonContentFooter": "", "clusterCaption": "Метка", "hintContent": ""}},
        {"type": "Feature", "id": 27, "geometry": {"type": "Point", "coordinates": [55.751841, 37.404853]}, "properties": {"balloonContentHeader": "<font size=3><b><span>Метка</span></b></font>", "balloonContentBody": "<input type='submit' value='Выбрать метку'>", "balloonContentFooter": "", "clusterCaption": "Метка", "hintContent": ""}},
        {"type": "Feature", "id": 28, "geometry": {"type": "Point", "coordinates": [55.627303, 37.728976]}, "properties": {"balloonContentHeader": "<font size=3><b><span>Метка</span></b></font>", "balloonContentBody": "<input type='submit' value='Выбрать метку'>", "balloonContentFooter": "", "clusterCaption": "Метка", "hintContent": ""}},
        {"type": "Feature", "id": 29, "geometry": {"type": "Point", "coordinates": [55.816515, 37.597163]}, "properties": {"balloonContentHeader": "<font size=3><b><span>Метка</span></b></font>", "balloonContentBody": "<input type='submit' value='Выбрать метку'>", "balloonContentFooter": "", "clusterCaption": "Метка", "hintContent": ""}},
        {"type": "Feature", "id": 30, "geometry": {"type": "Point", "coordinates": [55.664352, 37.689397]}, "properties": {"balloonContentHeader": "<font size=3><b><span>Метка</span></b></font>", "balloonContentBody": "<input type='submit' value='Выбрать метку'>", "balloonContentFooter": "", "clusterCaption": "Метка", "hintContent": ""}},
        {"type": "Feature", "id": 31, "geometry": {"type": "Point", "coordinates": [55.679195, 37.600961]}, "properties": {"balloonContentHeader": "<font size=3><b><span>Метка</span></b></font>", "balloonContentBody": "<input type='submit' value='Выбрать метку'>", "balloonContentFooter": "", "clusterCaption": "Метка", "hintContent": ""}},
        {"type": "Feature", "id": 32, "geometry": {"type": "Point", "coordinates": [55.673873, 37.658425]}, "properties": {"balloonContentHeader": "<font size=3><b><span>Метка</span></b></font>", "balloonContentBody": "<input type='submit' value='Выбрать метку'>", "balloonContentFooter": "", "clusterCaption": "Метка", "hintContent": ""}},
        {"type": "Feature", "id": 33, "geometry": {"type": "Point", "coordinates": [55.681006, 37.605126]}, "properties": {"balloonContentHeader": "<font size=3><b><span>Метка</span></b></font>", "balloonContentBody": "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input onclick={alert(1)}  type='submit' value='Выбрать метку'></p>", "balloonContentFooter": "", "clusterCaption": "Метка", "hintContent": ""}},
        {"type": "Feature", "id": 34, "geometry": {"type": "Point", "coordinates": [55.876327, 37.431744]}, "properties": {"balloonContentHeader": "<font size=3><b><span>Метка</span></b></font>", "balloonContentBody": "<input type='submit' value='Выбрать метку'>", "balloonContentFooter": "", "clusterCaption": "Метка", "hintContent": ""}},
        {"type": "Feature", "id": 35, "geometry": {"type": "Point", "coordinates": [55.843363, 37.778445]}, "properties": {"balloonContentHeader": "<font size=3><b><span>Метка</span></b></font>", "balloonContentBody": "<input type='submit' value='Выбрать метку'>", "balloonContentFooter": "", "clusterCaption": "Метка", "hintContent": ""}},
    ]
};

class TemplateProvider extends React.Component {
    state = {
        template: null
    };

    componentDidMount() {
        //     .addEventListener('click', (e)=>{
        //     console.log(e);
        // })
        this.setState({
            template: this.props.ymaps.templateLayoutFactory.createClass(
                /*кастомный класс
                ['<ul class=list>',
                '{% for geoObject in properties.geoObjects %}',
                '<li>' +
                '<a href=# data-placemarkid="{{ geoObject.id }}" class="list_item">' +
                '{{ geoObject.properties.balloonContentHeader|raw }} ' +
                '{{ geoObject.id }}' +
                '</a></li>',
                '{% endfor %}',
                '</ul>'].join('')*/

                //затираем шаблон
                ''
            )
        });
    }

    render() {
        return this.props.children({ template: this.state.template });
    }
}

const ConnectedTemplateProvider = withYMaps(TemplateProvider, true, [
    'templateLayoutFactory',
]);


class App extends Component {
    state = {
        mapState: {
            center: [55.751574, 37.573856],
            zoom: 12,
        }
    }

    handleClick = (e) => {
        let _this = this;
        //console.log(e.originalEvent.currentTarget);

        //id метки при клике
        e.originalEvent.currentTarget.objects.balloon.events.add('click', (e)=> {
            //console.log(e.originalEvent.target.balloon._objectIdWithOpenBalloon);
            this.setState({
                id: e.originalEvent.target.balloon._objectIdWithOpenBalloon
            });
        });


        e.originalEvent.currentTarget.clusters.balloon.events.add('autopanbegin', (e)=>{
            let newState = e.get('target').state._data.activeObject.id;
            _this.setState({
                id: newState
            });

            e.get('target').state.events.add('change', function (e) {

                let newState = e.get('target')._data.activeObject.id;
                e.get('target')._data.activeObject.balloonContentBody = '';
                e.get('target')._data.activeObject.balloonContentFooter = '';
                e.get('target')._data.activeObject.balloonContentHeader = '';
                e.get('target')._data.activeObject.clusterCaption = '';
                e.get('target')._data.activeObject.hintContent = '';
                _this.setState({
                    id: newState
                });
            });
        });

        /*
        let objectId = e.get('objectId');

        this.setState({
            id: objectId
        });
        */
    }

    render() {
        return (
            <div className="wrapper">
                <header>
                    {this.state.id && this.state.id !==0 ? <p>Вы выбрали точку с id: {this.state.id}</p> : null}
                </header>
                <YMaps>
                    <ConnectedTemplateProvider>
                        {({ template }) => (
                            <Map width={1260} height={500} defaultState={this.state.mapState}>
                                <ObjectManager
                                    options={{
                                        clusterize: true,
                                        gridSize: 32,
                                        clusterDisableClickZoom: true,
                                        geoObjectOpenBalloonOnClick: true,
                                        clusterOpenBalloonOnClick: true,
                                    }}
                                    objects={{
                                        preset: 'islands#greenDotIcon',
                                        //hasBalloon: false
                                    }}
                                    clusters={{
                                        preset: 'islands#redClusterIcons',
                                        //balloonContentLayout: template,
                                        // В данном примере балун никогда не будет открываться в режиме панели.
                                        balloonPanelMaxMapArea: 0,
                                        // Устанавливаем размер макета контента балуна (в пикселях).
                                        balloonContentLayoutWidth: 125, //350,
                                        // Устанавливаем собственный макет.
                                        balloonItemContentLayout: template,
                                        // Устанавливаем ширину левой колонки, в которой располагается список всех геообъектов кластера.
                                        balloonLeftColumnWidth: 125
                                    }}
                                    defaultFeatures={features}
                                    modules={[
                                        'objectManager.addon.objectsBalloon',
                                        'objectManager.addon.clustersBalloon',
                                        'geoObject.addon.balloon'
                                    ]}
                                    onClick={(e)=>{this.handleClick.call(this,e)}}
                                />
                            </Map>
                        )}
                    </ConnectedTemplateProvider>
                </YMaps>
            </div>
        );
    }
}


export default App;
