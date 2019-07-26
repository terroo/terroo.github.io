#!/bin/bash

# author: Marcos Oliveira <terminalroot.com.br>
# describe: Script to create an initial structure for posts in Jekyll
# version: 1.0
# license: MIT License

_usage(){
  cat <<EOF
usage: ${0##*/} options [title]
  
  Options:
    -c [title]    Show channel title
    -h            Print this help message
    -v            Print version

* Script in development
EOF

}

_skell(){

    _DATE=$(date +%Y-%m-%d)
    _TIME=$(date +%H:%M:%S)

    echo "---"
    echo "layout: post"
    echo "title: \"${1}\""
    echo "date: ${_DATE} ${_TIME}"
    echo "image: '/assets/img/'"
    echo "description:"
    echo "main-class:"
    echo "tags:"
    echo "---"
    echo
    echo '
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    <!-- Informat -->
    <ins class="adsbygoogle"
         style="display:block"
         data-ad-client="ca-pub-2838251107855362"
         data-ad-slot="2327980059"
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
    <script>
    (adsbygoogle = window.adsbygoogle || []).push({});
    </script>
    '
}

_initpost(){

    _PADRAO=$(date +%Y-%m-%d)
    _URL=$(echo $1 | sed 's/+/-/g' | tr A-Z a-z | tr -d '!@#$%&*()_<>}{~?^/:\"' | tr ' ' '-' | sed 's/--//g' |
          sed 'y/áÁàÀãÃâÂéÉêÊíÍóÓõÕôÔúÚüÜçÇ/aAaAaAaAeEeEiIoOoOoOuUuUcC/' | tr -d ',.;:' | sed 's/-$//g')
    _skell "$1" > "_posts/$_PADRAO-$_URL.md"
    echo -e "\e[36;1m➜ File created successfully!\n\e[37;1m_posts/$_PADRAO-$_URL.md\e[m"

}

while getopts c:vh PARAM
do 
	case "$PARAM" in
		c) _initpost "$OPTARG" ;;
		h) _usage && exit 0   ;;
		v) sed -n '/^#.*version/p' $0 | sed 's/^# //' ;;
		*) _usage && exit 1   ;;
	esac
# shift $(( OPTIND - 1 ))
done
