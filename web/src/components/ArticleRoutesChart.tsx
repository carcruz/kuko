import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell,
} from 'recharts'

const data = [
  { zone: 'San José', rutas: 142 },
  { zone: 'Alajuela', rutas: 87 },
  { zone: 'Cartago', rutas: 68 },
  { zone: 'Heredia', rutas: 54 },
  { zone: 'Guanacaste', rutas: 45 },
  { zone: 'Pacífico', rutas: 38 },
  { zone: 'Limón', rutas: 32 },
  { zone: 'Zona Sur', rutas: 10 },
]

export default function ArticleRoutesChart() {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={data} layout="vertical" margin={{ left: 0, right: 24, top: 0, bottom: 0 }}>
        <XAxis
          type="number"
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 11, fill: '#7A7A7A' }}
        />
        <YAxis
          type="category"
          dataKey="zone"
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12, fill: '#2D2D2D' }}
          width={82}
        />
        <Tooltip
          contentStyle={{ backgroundColor: 'white', border: '1px solid #000', borderRadius: 0, fontSize: 12 }}
          formatter={(v) => [`${v} rutas`, '']}
          cursor={{ fill: '#F5F5F5' }}
        />
        <Bar dataKey="rutas" radius={0}>
          {data.map((_, i) => (
            <Cell key={i} fill={i === 0 ? '#000000' : '#2D2D2D'} opacity={1 - i * 0.07} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}
