import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
} from 'recharts'

const data = [
  { year: '2020', cirugias: 42000 },
  { year: '2021', cirugias: 51000 },
  { year: '2022', cirugias: 58000 },
  { year: '2023', cirugias: 64000 },
  { year: '2024', cirugias: 71000 },
  { year: '2025', cirugias: 68000 },
]

export default function HomeHeroChart() {
  return (
    <div className="w-full">
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={data}>
          <XAxis
            dataKey="year"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#6B6B6B' }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#6B6B6B' }}
            tickFormatter={(v) => `${v / 1000}k`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #000',
              borderRadius: 0,
              fontSize: 12,
            }}
            formatter={(v: number) => [v.toLocaleString('es-CR'), 'Cirugías en espera']}
          />
          <Line
            type="monotone"
            dataKey="cirugias"
            stroke="#E85D75"
            strokeWidth={3}
            dot={{ fill: '#E85D75', r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
      <p className="text-xs text-[#6B6B6B] mt-3 text-center">
        Personas en lista de espera quirúrgica (2020–2025)
      </p>
    </div>
  )
}
