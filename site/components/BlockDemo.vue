<template>
  <div :class="['block-demo', isFullscreen ? 'block-demo--fixed' : '']" ref="block">
    <div class="preview" ref="preview">
      <div class="demo" ref="demo"></div>
    </div>
    <div v-show="showEditor" class="editor" ref="editor">
      <div class="bock-demo__ctrl">
        <!-- <button>复制</button> -->
        <span title="运行" @click="syncCode" class="icon">
          <img src="./play.svg" alt="运行">
        </span>
        <span v-if="!isFullscreen" title="全屏" @click="fullscreen" class="icon">
          <img src="./full-screen.svg" alt="全屏">
        </span>
        <span v-if="isFullscreen" title="取消全屏" @click="fullscreen" class="icon">
          <img src="./recovery.svg" alt="取消全屏">
        </span>
        <span @click="copyCode" class="icon">
          <img src="./code-copy.svg" alt="复制代码">
        </span>
      </div>
      <div class="bock-demo__code">
        <textarea ref="textarea"></textarea>
      </div>
    </div>
    <textarea ref="copytxt" class="copytxt"></textarea>
  </div>
</template>
<script>
import CodeMirror from 'codemirror'
import Split from 'split.js'
import { unescape } from 'scapegoat'
// import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/jsx/jsx'
// import 'codemirror/mode/xml/xml'
import 'codemirror/lib/codemirror.css'

import { throttle } from '../utils'

export default {
  props: {
    tip: String,
    source: String
  },

  data () {
    return {
      editor: null,
      visible: true,

      isJSON: false,
      isFullscreen: false,
      showEditor: true
    }
  },

  mounted () {
    let tip = this.tip.split(',')

    try {
      tip = JSON.parse(JSON.stringify(tip))
    } catch (e) { }

    let innerWidth = window.innerWidth
    this.isFullscreen = tip.indexOf('fullscreen') > -1
      ; (this.showEditor = innerWidth >= 768) && this.initSplit()

    this.initEditor()
    try {
      this.$nextTick(() => {
        this.syncCode()
      })
    } catch (e) {
      throw e
    }
  },

  methods: {
    copyCode () {
      let val = this.editor.getDoc().getValue()
      let $text = this.$refs['copytxt']
      $text.value = val
      $text.focus()
      $text.select()
      document.execCommand('copy')
      alert('复制成功！')
    },
    toggle () {
      this.visible = !this.visible
    },

    unescape (html) {
      return unescape(html)
    },

    initSplit () {
      Split([this.$refs['preview'], this.$refs['editor']], {
        sizes: [50, 50]
      })
    },

    initEditor () {
      this.editor = CodeMirror.fromTextArea(this.$refs['textarea'], {
        mode: 'jsx',
        extraKeys: {
          'Ctrl-Space': 'autocomplete'
        },
        foldGutter: true,
        gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
        lineNumbers: true,
        lineWrapping: false
      })

      this.editor.getDoc().setValue(this.unescape(this.source))
    },

    syncCode () {
      const oDemo = this.$refs['demo']
      oDemo.innerHTML = `<iframe class="chart-frame" frameborder="0"></iframe>`
      const iframe = oDemo.querySelector('iframe')

      const code = Babel.transform(this.editor.getValue(), {
        presets: ['react', 'es2015', 'stage-0'],
        plugins: ['transform-react-jsx'],
        comments: false
      }).code

      iframe.contentWindow.document.write(
        `<div id="app" style="width: 100%; height: 100%; overflow: hidden"><\/div>
        <script crossorigin="anonymous" integrity="sha384-1h1mm/F6lFiBxX76g+9DH51Oa/er1DefjdEykhUdbnfUEUVAEQFI5AB+BtFdUdKr" src="//lib.baomitu.com/react/16.9.0-alpha.0/umd/react.production.min.js"><\/script>
        <script crossorigin="anonymous" integrity="sha384-/6abeKukkMgqKqL8g8JINA6J38IKDXwd1XiKRHwF1y6IWpMAuCI+4KSBLOj3bv+k" src="//lib.baomitu.com/react-dom/16.9.0-alpha.0/umd/react-dom.production.min.js"><\/script>
        <script crossorigin="anonymous" integrity="sha384-LYxFDCinsAkMityIwlndisTOMBM5FXNysu758VzqiuCRZmCw7aDRDVn9HlHPi80A" src="//lib.baomitu.com/prop-types/15.7.2/prop-types.min.js"><\/script>
        <script src="https://unpkg.com/spritejs@2/dist/spritejs.min.js"><\/script>
        <script src="https://unpkg.com/@qcharts/core@0.2/dist/index.js"><\/script>
        <script src="https://unpkg.com/cat-charts-react/lib/index.js"><\/script>
        <script>
        function require(name) {
          switch (name) {
            case 'react':
              return React
            case 'react-dom':
              return ReactDOM
            case 'cat-charts-react':
              return CatchartsReact
          }
        }
        <\/script>
        <script>${code}<\/script>`
      )
    },

    fullscreen () {
      this.isFullscreen = !this.isFullscreen
      if (window.parent) {
        window.parent.postMessage({ fullScreen: this.isFullscreen }, '*')
      }
    }
  }
}
</script>

<style lang="scss">
.block-demo {
  position: relative;
  margin-top: 1.2em;
  box-sizing: border-box;

  height: 600px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  border: 1px solid #edeff1;
  background: #fff;

  font-size: 1.2rem;
}

.gutter {
  background: #efefef00;
  cursor: col-resize;
  position: relative;
  z-index: 100;
  left: 5px;
}

.block-demo button {
  padding: 0.15rem 0.5rem;
}

.block-demo--fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  margin-top: 0 !important;
}
.block-demo--fixed .bock-demo__ctrl {
  padding-right: 88px;
}
.block-demo + .block-demo {
  margin-top: 30px;
}

.block-demo > .editor,
.block-demo > .preview {
  box-sizing: border-box;
  width: 50%;
  height: 100%;
}

@media (max-width: 768px) {
  .block-demo > .preview {
    width: 100%;
  }
}

.block-demo > .preview {
  box-sizing: border-box;
  max-height: 100%;
  padding: 1rem;
  overflow: hidden;
}

.editor {
  background: #f8fafe;
  border-left: 1px solid #edeff1;
}

.bock-demo__ctrl {
  height: 45px;
  padding: 0 15px;
  border-bottom: 1px solid #ddd;
  text-align: right;
  background: #fff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.bock-demo__ctrl button + button {
  margin-left: 10px;
}

.bock-demo__code {
  height: calc(100% - 46px);
}

.block-demo .demo {
  height: 100%;
}

.block-demo .demo iframe.chart-frame {
  width: 100%;
  height: 100%;
}
.block-demo + h4 {
  margin-top: 0;
  padding-top: 3.6rem;
}

.CodeMirror {
  height: 100% !important;
  font-family: monospace;
  color: #000;
  direction: ltr;
}

.icon {
  cursor: pointer;
  opacity: 0.6;
  font-size: 20px;
  margin-left: 12px;
}
.icon:hover {
  opacity: 1;
}

.copytxt {
  width: 100%;
  height: 1px;
  opacity: 0;
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>
