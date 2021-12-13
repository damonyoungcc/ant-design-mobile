import React, { useState } from 'react'
import { Picker, Button, Space, Toast } from 'antd-mobile'
import { DemoBlock } from 'demos'

const basicColumns = [
  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N'],
  ['1', '222222222222222222222222222222222', '3'],
]

const customSameColumns = [
  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N'],
  ['1', '3', '3'],
]

// 基础用法
function BasicDemo() {
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState<(string | null)[]>(['M'])
  return (
    <>
      <Button
        onClick={() => {
          setVisible(true)
        }}
      >
        选择
      </Button>
      <Picker
        columns={basicColumns}
        visible={visible}
        onClose={() => {
          setVisible(false)
        }}
        value={value}
        onConfirm={v => {
          setValue(v)
        }}
      />
    </>
  )
}

// 渲染所选值
function RenderChildrenDemo() {
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState<(string | null)[]>([])
  return (
    <Space align='center'>
      <Button
        onClick={() => {
          setVisible(true)
        }}
      >
        选择
      </Button>
      <Picker
        columns={basicColumns}
        visible={visible}
        onClose={() => {
          setVisible(false)
        }}
        value={value}
        onConfirm={setValue}
        onSelect={(val, extend) => {
          console.log('onSelect', val, extend.items)
        }}
      >
        {items => {
          if (items.every(item => item === null)) {
            return '未选择'
          } else {
            return items.map(item => item?.label ?? '未选择').join(' - ')
          }
        }}
      </Picker>
    </Space>
  )
}

function RenderSameItem() {
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState<(string | null)[]>([])
  const renderColumns = () => {
    return customSameColumns.map(item => {
      return item.map((item, index) => {
        return {
          index,
          realValue: item,
          label: item,
          value: `${item}${index}`,
        }
      })
    })
  }
  return (
    <Space align='center'>
      <Button
        onClick={() => {
          setVisible(true)
        }}
      >
        选择
      </Button>
      <Picker
        columns={renderColumns}
        visible={visible}
        onClose={() => {
          setVisible(false)
        }}
        onConfirm={(val, extend) => {
          const { items } = extend || {}
          setValue(items.map(item => item?.value || null))
        }}
        onSelect={(val, extend) => {
          console.log('onSelect', val, extend.items)
        }}
      />
      {value ? value.join('-') : '未选择'}
    </Space>
  )
}

export default () => {
  return (
    <>
      <DemoBlock title='基础用法'>
        <BasicDemo />
      </DemoBlock>

      <DemoBlock title='渲染所选值'>
        <RenderChildrenDemo />
      </DemoBlock>

      <DemoBlock title='指令式调用'>
        <Button
          onClick={async () => {
            const value = await Picker.prompt({
              columns: basicColumns,
            })
            Toast.show(`你选择了 ${value}`)
          }}
        >
          弹出 Picker
        </Button>
      </DemoBlock>
      <DemoBlock title='存在相同值'>
        <RenderSameItem />
      </DemoBlock>
    </>
  )
}
