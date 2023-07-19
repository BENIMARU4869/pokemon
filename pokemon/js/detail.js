const pokemon_str = '[\
  {\
    "pokemon_id": "bippa", \
    "daimei": "ビッパ詳細", \
    "zukann": "図鑑No.1", \
    "pokemon_name": "ビッパ", \
    "pokemon_bunrui": "まるねずみポケモン", \
    "douro": "1番道路", \
    "seisokuchi": [[0, 0], [1, 2], [3, 3], [4, 4]]\
  },\
  {\
  "pokemon_id": "mukkuru", \
  "daimei": "ムックル詳細", \
  "zukann": "図鑑No.2", \
  "pokemon_name": "ムックル", \
  "pokemon_bunrui": "むくどりポケモン", \
  "douro": "2番道路", \
  "seisokuchi": [[0, 0], [1, 2], [3, 3], [4, 4]]\
  },\
  {\
    "pokemon_id": "korobohshi", \
    "daimei": "コロボーシ詳細", \
    "zukann": "図鑑No.3", \
    "pokemon_name": "コロボーシ", \
    "pokemon_bunrui": "こおろぎポケモン", \
    "douro": "3番道路", \
    "seisokuchi": [[0, 0], [1, 2], [3, 3], [4, 4]]\
  },\
  {\
    "pokemon_id": "kolink", \
    "daimei": "コリンク詳細", \
    "zukann": "図鑑No.4", \
    "pokemon_name": "コリンク", \
    "pokemon_bunrui": "せんこうポケモン", \
    "douro": "4番道路", \
    "seisokuchi": [[0, 0], [1, 2], [3, 3], [4, 4]]\
  },\
  {\
    "pokemon_id": "pachirisu", \
    "daimei": "パチリス詳細", \
    "zukann": "図鑑No.5", \
    "pokemon_name": "パチリス", \
    "pokemon_bunrui": "でんきりすポケモン", \
    "douro": "5番道路", \
    "seisokuchi": [[0, 0], [1, 2], [3, 3], [4, 4]]\
  },\
  {\
    "pokemon_id": "ponyta", \
    "daimei": "ポニータ詳細", \
    "zukann": "図鑑No.6", \
    "pokemon_name": "ポニータ", \
    "pokemon_bunrui": "ひのうまポケモン", \
    "douro": "6番道路", \
    "seisokuchi": [[0, 0], [1, 2], [3, 3], [4, 4]]\
  },\
  {\
    "pokemon_id": "yamikarasu", \
    "daimei": "ヤミカラス詳細", \
    "zukann": "図鑑No.7", \
    "pokemon_name": "ヤミカラス", \
    "pokemon_bunrui": "くらやみポケモン", \
    "douro": "7番道路", \
    "seisokuchi": [[0, 0], [1, 2], [3, 3], [4, 4]]\
  },\
  {\
    "pokemon_id": "mimirol", \
    "daimei": "ミミロル詳細", \
    "zukann": "図鑑No.8", \
    "pokemon_name": "ミミロル", \
    "pokemon_bunrui": "うさぎポケモン", \
    "douro": "8番道路", \
    "seisokuchi": [[0, 0], [1, 2], [3, 3], [4, 4]]\
  },\
  {\
    "pokemon_id": "nyarmar", \
    "daimei": "ニャルマー詳細", \
    "zukann": "図鑑No.9", \
    "pokemon_name": "ニャルマー", \
    "pokemon_bunrui": "ねこかぶりポケモン", \
    "douro": "9番道路", \
    "seisokuchi": [[0, 0], [1, 2], [3, 3], [4, 4]]\
  },\
  {\
    "pokemon_id": "buoysel", \
    "daimei": "ブイゼル詳細", \
    "zukann": "図鑑No.10", \
    "pokemon_name": "ブイゼル", \
    "pokemon_bunrui": "うみイタチポケモン", \
    "douro": "10番道路", \
    "seisokuchi": [[0, 0], [1, 2], [3, 3], [4, 4]]\
  }\
]';

const pokemon_array = JSON.parse(pokemon_str);

// URLを取得
const url = new URL(window.location.href);

// URLSearchParamsオブジェクトを取得
const params = url.searchParams;

// パラメータから「pokemon_id」を取得
const pokemonId = params.get("pokemon_id");

// pokemon_arrayから、pokemon_idがbippaのものを検索する
// 配列からオブジェクトを検索する

pokemon = pokemon_array.find(p => p.pokemon_id === pokemonId);

daimei = document.getElementById('daimei')
zukann = document.getElementById('zukann')
pokemon_name = document.getElementById('pokemon_name')
pokemon_bunrui = document.getElementById('pokemon_bunrui')
douro = document.getElementById('douro')

daimei.textContent = pokemon.daimei;
zukann.textContent = pokemon.zukann;
pokemon_name.textContent = pokemon.pokemon_name;
pokemon_bunrui.textContent = pokemon.pokemon_bunrui;
douro.textContent = pokemon.douro;

for (let i = 0; i < pokemon.seisokuchi.length; i++) {
  tr = document.getElementsByClassName('row_' + pokemon.seisokuchi[i][0])[0];
  td = tr.getElementsByClassName('col_' + pokemon.seisokuchi[i][1])[0];
  td.style.backgroundColor = 'red';
}

// TODO Bootstrap
// TODO CSSの適用

// TODO Googleマップの地図を使ってよいか
// TODO その他リンク先のページ作成
// TODO ポケモンのイラストをどうするか
// TODO タブに表示されるタイトルの修正
// TODO デプロイ
