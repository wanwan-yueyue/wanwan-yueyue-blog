# 拉格朗日方程在机械臂中的数学建模

## Derivations of Lagrange Equation

### The Principle of Least Action (最小作用量原理)：

> 某样东西在时间上的积累是最小值，这个东西就叫做作用量.数学形式长这样:
>
> $$
> S = \int_{t_1}^{t_2} L(q, \dot{q}, t) \, \mathrm{d}t
> $$
> 在上式中，q是广义坐标(*Generallized coordinate*)，一个物体的运动轨迹可以用$q(t)$表示.
>
> 对于其作用量，其值S可以被路径所改变. 一个新的路径可以被记作 $q(t) + δq(t)$ .如果 $q(t)$ 是现实生活中的路径, 那么改变后的路径作用量 $S'$ 应该比原来的作用量 $S$ 大. 相应的, 如果再选择其他路径, 则有 $S_{新} > S_{原}$
>
> 注意到$δq(t_{1})$ 和$δq(t_{2})$分别是路径在起点和终点的改变量, 则$δq(t_{1}) = δq(t_{2}) = 0$

### Formal Derivations

由最小作用量原理可得：
$$
S + δS = S
$$
即：
$$
δS = 0
$$
利用全微分，有：

$$
\mathrm{d}Z = \left( \frac{\partial}{\partial x} Z \right) \textcolor{yellow}{\mathrm{d}x} + \left( \frac{\partial}{\partial y} Z \right) \textcolor{blue}{\mathrm{d}y}
$$
将$\mathrm{d}$换成$\delta$ (换成变分), $Z$ 换成 $L$ :
$$
\delta L = \left( \frac{\partial}{\partial \textcolor{yellow}{x}} L \right) \delta x + \left( \frac{\partial}{\partial y} L \right) \textcolor{blue}{\delta y}
$$

$$
L(\textcolor{yellow}{q(t)}, \dot{q}(t))
$$

而对于
$$
 S  = \int^{t_2}_{t_1}L(q, \dot{q}, t) \mathrm{d}t
$$
因为$\delta S = 0$， 所以有：
$$
\delta S = \int_{t_1}^{t_2}\delta L(q, \dot{q}, t)\mathrm{d}t = 0
$$
即：
$$
 \delta S = \int_{t_1}^{t_2} \left( \frac{\partial L}{\partial \textcolor{yellow}{q}} \delta \textcolor{yellow}{q} + \frac{\partial L}{\partial \dot{q}} \delta \dot{q} \right) dt = 0 
$$

$$
\delta S = \int_{t_1}^{t_2}  \frac{\partial L}{\partial \textcolor{yellow}{q}} \delta \textcolor{yellow}{q} \mathrm{d}t + \int_{t_1}^{t_2} \frac{\partial L}{\partial \dot{q}} \delta \dot{q} \mathrm{d}t = 0
$$

由$\delta \dot{q} = \delta \frac{\mathrm{d}}{\mathrm{d}t}q = \frac{\mathrm{d}}{\mathrm{d} t} \delta q$对 $\delta q$ 点做代换可得：

$$
\delta S = \int_{t_1}^{t_2}  \frac{\partial L}{\partial \textcolor{yellow}{q}} \delta \textcolor{yellow}{q} \mathrm{d}t + \int_{t_1}^{t_2} \frac{\partial L}{\partial \dot{q}} \frac{\mathrm{d}}{\mathrm{d} t}(\delta \textcolor{yellow}{q}) \mathrm{d}t = 0 \\\delta S = \int_{t_1}^{t_2}  \frac{\partial L}{\partial \textcolor{yellow}{q}} \delta \textcolor{yellow}{q} \mathrm{d}t + \int_{t_1}^{t_2} \frac{\partial L}{\partial \dot{q}} \mathrm{d}(\delta \textcolor{yellow}{q}) \mathrm{d}t = 0
$$
注意到第二项可以使用分部积分：
$$
\delta S = \int_{t_1}^{t_2} \frac{\partial L}{\partial q} \delta q \, \mathrm{d} t + \int_{t_1}^{t_2} -\frac{\mathrm{d}}{\mathrm{d} t} \frac{\partial L}{\partial \dot{q}} \delta q \, \mathrm{d} t + \left. \frac{\partial L}{\partial \dot{q}} \delta q \right|_{t_1}^{t_2} = 0
$$

$$
\delta S = \int_{t_1}^{t_2} \frac{\partial L}{\partial q} \delta q \, \mathrm{d} t + \int_{t_1}^{t_2} -\frac{\mathrm{d}}{\mathrm{d} t} \frac{\partial L}{\partial \dot{q}} \delta q \, \mathrm{d} t + \frac{\partial L}{\partial \dot{q}} (\delta q(t_1) - \delta q(t_2)) = 0
$$

由于$\delta q(t_1) = \delta q(t_2) = 0$ ,因此上式可化为：

$$
\delta S = \int_{t_1}^{t_2} \frac{\partial L}{\partial q} \delta q \, \mathrm{d}t + \int_{t_1}^{t_2} -\frac{\mathrm{d}}{\mathrm{d} t} \frac{\partial L}{\partial \dot{q}} \delta q \, \mathrm{d}t = 0
$$

$$
 \delta S = \int_{t_1}^{t_2} \left( \frac{\partial L}{\partial q} - \frac{\mathrm{d}}{\mathrm{d}t} \frac{\partial L}{\partial \dot{q}} \right) \delta q \, \mathrm{d}t = 0 
$$



由于$\delta q$ 是任意的，所以括号内等于0， 即可得拉格朗日方程：

$$
\frac{\partial \mathcal{L}}{\partial q} - \frac{\mathrm{d}}{\mathrm{d}t} \frac{\partial \mathcal{L}}{\partial \dot{q}} = 0
$$

## Dynamic modeling of manipulator

### Core principle：

对于 $n$ 自由度完整约束系统，拉格朗日方程为：
$$
\frac{\partial \mathcal{L}}{\partial q} - \frac{\mathrm{d}}{\mathrm{d}t} \frac{\partial \mathcal{L}}{\partial \dot{q}} = Q_i \,\,\,\,\,\,\,\,\,\,(i=1,2,…,n)
$$
其中，拉格朗日函数$\mathcal{L} = T - V$ , $T$ 为动能,  $V$ 为势能$q_i$ 为广义坐标，$Q_i$ 为广义力。该方程将力学问题转化为能量泛函的极值问题，适用于多刚体系统动力学分析。

### Dynamic modeling and derivation

1. #### 广义坐标与位形描述：

   1. 广义坐标（*Generalized Coordinates*）

      广义坐标是确定系统位形所需的最小独立变量集合，记为

   $$
   q = [q_1, q_2, \cdots, q_n]^t
   $$

   ​	其满足以下特性：

      - 独立性：变量间不受运动学约束，仅受系统间固有约束或无约束关系。
      - 完备性：可以描述系统的全部位形。

   2. 机械臂广义坐标：

      机械臂是多刚体连杆系统，通过关节连接：

      - 每个关节的转动角度天然是独立变量。

      - n个关节对应n个广义坐标 $q_1, q_2, \cdots, q_n$ , 构成向量 $\textbf{q} = [ q_1, q_2, \cdots, q_n ]^T$

      - **对比笛卡尔坐标：**若用末端笛卡尔坐标$(x,y,z,\alpha,\beta,\gamma)$描述位形，会因连杆长度固定、关节运动束缚（如转动关节只能限制移动）导致变量间存在**几何约束**（非独立），建模复杂。而关节角直接利用了关节的**运动独立性**，更适合作为广义坐标。

   3. 位形（*Configuration*）：

      位形是**系统在空间中的几何形态**，包含有：

      - 各刚体的位置（如质心坐标）。
      - 各刚体的姿态（如连杆方向、旋转角度）。

   4. 对于机械臂，位形由广义坐标系唯一确定：
      给定广义坐标 $\textbf{q} = [q_1, q_2, \cdots, q_n]^T$ , 通过运动学正解可计算出每个连杆的质心位置 $\textbf{r}_i(\textbf{q})$ 和每个连杆的姿态（如旋转矩阵 $\textbf{R}_i(\textbf{q})$ ）

      > 以下给出D-H参数算法给出计算参考：
      >
      > 在机械臂中，广义坐标系 $[q_1, q_2, \cdots, q_n]$ 通常表示关节角 $\theta_i$ , 给出以下D-H参数定义：
      >
      > - $a_i$：连杆长度（沿 $x_{i-1}$ 轴，从 $z_{i-1}$ 到 $z_i$ 的距离）； 
      > - $\alpha_i$：连杆扭角（绕 $x_{i-1}$ 轴，从 $z_{i-1}$ 到 $z_i$ 的旋转角）；
      > - $d_i$：关节偏距（沿 $z_i$ 轴，从 $x_{i-1}$ 到 $x_i$ 的距离）；
      > - $\theta_i$：关节角（绕 $z_i$ 轴，从 $x_{i−1}$ 到 $x_i$ 的旋转角）。
      >
      > 随后构建齐次变换矩阵，考虑相邻连杆$i - 1$ 到 $i$ 的齐次变换矩阵：
      > $$
      > \textbf{T}_i(q_i) = \textbf{R}_z(\theta_i) \cdot \textbf{T}_z(d_i) \cdot \textbf{T}_x(a_i) \cdot \textbf{R}_x(\alpha_i) 
      > $$
      > 其中基础变换矩阵为：
      >
      > - 绕 $z$ 轴旋转 $\theta$ ：
      >
      > $$
      > \begin{equation*}
      > \textbf{R}_z(\theta)=\begin{bmatrix}
      > \cos{\theta} &-\sin{\theta} &0 &0\\
      > \sin{\theta} &\cos{\theta} &0 &0\\
      > 0 &0 &1 &0\\
      > 0 &0 &0 &1\\
      > \end{bmatrix}
      > \end{equation*}
      > $$
      >
      > - 沿 $z$ 轴平移 $d$ ：
      >
      > $$
      > \begin{equation*}
      > \textbf{T}_z(d)=\begin{bmatrix}
      > 1 &0 &0 &0\\
      > 0 &1 &0 &0\\
      > 0 &0 &1 &d\\
      > 0 &0 &0 &1\\
      > \end{bmatrix}
      > \end{equation*}
      > $$
      >
      > - 沿 $x$ 轴平移 $a$ ：
      >
      > $$
      > \begin{equation*}
      > \textbf{T}_x(a)=\begin{bmatrix}
      > 1 &0 &0 &a\\
      > 0 &1 &0 &0\\
      > 0 &0 &1 &0\\
      > 0 &0 &0 &1\\
      > \end{bmatrix}
      > \end{equation*}
      > $$
      >
      > - 绕 $x$ 轴旋转 $\alpha$：
      >
      > $$
      > \begin{equation*}
      > \textbf{T}_z(d)=\begin{bmatrix}
      > 1 &0 &0 &0\\
      > 0 &\cos{\alpha} &-\sin{\alpha} &0\\
      > 0 &\sin{\alpha} &\cos{\alpha} &0\\
      > 0 &0 &0 &1\\
      > \end{bmatrix}
      > \end{equation*}
      > $$
      >
      > 代入广义坐标 $q_i$ 后，变换矩阵可表示为：
      > $$
      > (\mathbf{T}_i(q_i) = \mathbf{R}_z(q_i) \cdot \mathbf{T}_z(d_i) \cdot \mathbf{T}_x(a_i) \cdot \mathbf{R}_x(\alpha_i)\)
      > $$
      > 从基坐标系到连杆 $i$ 坐标系的全局变换矩阵为：
      > $$
      > \mathbf{T}_{0i}(q) = \prod_{k=1}^i \mathbf{T}_k(q_k) 
      > $$
      > 其中：$q = [q_1, q_2, \dots, q_n]$
      >
      > 连杆 $i$ 的旋转矩阵 $\mathbf{R}_i(q)$ 为全局变换矩阵的上 3×3 子矩阵： 
      > $$
      > \mathbf{R}_i(q) = \begin{bmatrix} \mathbf{T}_{0i}(q)_{1,1} & \mathbf{T}_{0i}(q)_{1,2} & \mathbf{T}_{0i}(q)_{1,3} \\ \mathbf{T}_{0i}(q)_{2,1} & \mathbf{T}_{0i}(q)_{2,2} & \mathbf{T}_{0i}(q)_{2,3} \\ \mathbf{T}_{0i}(q)_{3,1} & \mathbf{T}_{0i}(q)_{3,2} & \mathbf{T}_{0i}(q)_{3,3} \end{bmatrix}
      > $$
      > 设连杆 $i$ 的质心在其局部坐标系 $i$ 中的位置向量为 $\mathbf{r}_{i,\text{local}} = [c_i, 0, 0]^T$（假设质心在 $x_i$ 轴上，可根据实际几何调整），则质心在基坐标系下的位置为：
      > $$
      > \mathbf{r}_i(q) = \mathbf{T}_{0i}(q) \cdot \begin{bmatrix} 
      > \mathbf{r}_{i,\text{local}} \\ 
      > 1 \\
      > \end{bmatrix}
      > $$
      > 展开计算时，利用齐次变换的平移和旋转特性：
      > $$
      > \mathbf{r}_i(q) = 
      > \mathbf{p}_{0i}(q)
      > + \mathbf{R}_i(q) 
      > \cdot \mathbf{r}_{i,\text{local}}
      > $$
      >
      >
      > 其中 
      > $$
      > \mathbf{p}_{0i}(q) = 
      > [\mathbf{T}_{0i}(q)_{1,4}, 
      > \mathbf{T}_{0i}(q)_{2,4}, 
      > \mathbf{T}_{0i}(q)_{3,4}]^T
      > $$
      > 为全局变换矩阵的平移向量。

      **实例**：两连杆旋转机械臂：

      >以两连杆旋转机械臂为例（广义坐标 $q = [\theta_1, \theta_2])$），$D-H$ 参数表如下：
      >
      >| 连杆 i             | $\alpha_i$ | $a_i$ | $d_i$ | $\theta_i$ |
      >| :----------------- | ---------- | ----- | ----- | ---------- |
      >| 1                  | 0          | $l_1$ | 0     | $q_1$      |
      >| 2                  | 0          | $l_2$ | 0     | $q_2$      |
      >
      >- 连杆1变换矩阵：
      >
      >$$
      >\textbf{T}_1(q_1) = \textbf{R}_z(q_1) \cdot \textbf{T}_x(l_1) =
      >\begin{bmatrix}
      >\cos{q_1} &-\sin{q_1} &0 &l_1\cos{q_1} \\
      >\sin{q_1} &\cos{q_1} &0 &l_1\sin{q_1} \\
      >0 &0 &1 &0 \\
      >0 &0 &0 &1
      >\end{bmatrix}
      >$$
      >
      >- 连杆2变换矩阵：
      >
      >$$
      >\textbf{T}_2(q_2) = 
      >\textbf{R}_z(q_2) \cdot \textbf{T}_x(l_2) =
      >\begin{bmatrix}
      >\cos{q_2} &-\sin{q_2} &0 &l_2\cos{q_2} \\
      >\sin{q_2} &\cos{q_2} &0 &l_2\sin{q_2} \\
      >0 &0 &1 &0 \\
      >0 &0 &0 &1
      >\end{bmatrix}
      >$$
      >
      >
      >
      >- 全局变换矩阵：
      >
      >$$
      >\textbf{T}_{02}(q_1) = 
      >\textbf{T}_1(q_1) \cdot \textbf{T}_2(q_2) =
      >\begin{bmatrix}
      >\cos{q_1 + q_2} &-\sin{q_1 + q_2} &0 &l_1\cos{q_1}+l_2\cos(q_1 + q_2) \\
      >\sin{q_1 + q_2} &\cos{q_1 + q_2} &0 &l_1\sin{q_1}+l_2\sin(q_1 + q_2) \\
      >0 &0 &1 &0 \\
      >0 &0 &0 &1
      >\end{bmatrix}
      >$$
      >
      >**旋转矩阵**：
      >$$
      >\textbf{R}_2(q) = 
      >\begin{bmatrix}
      >\cos{q_1 + q_2} &-\sin(q_1 + q_2) &0 \\
      >\sin{q_1 + q_2} &\cos(q_1 + q_2) &0 \\
      >0 &0 &1
      >\end{bmatrix}
      >$$
      >**质心位置**：设连杆1，2质心分别在 $l_1/2$，$l_2/2$ 处，则：
      >
      >- 连杆1质心：
      >
      >$$
      >\textbf{r}_1(q)=
      >\begin{bmatrix}
      >(l_1/2)\cos{q_1} \\
      >(l_1/2)\sin{q_1} \\
      >0
      >\end{bmatrix}
      >$$
      >
      >- 连杆2质心：
      >
      >$$
      >\textbf{r}_2(q)=
      >\begin{bmatrix}
      >l_1\cos{q_1} + (l_2/2)\cos(q_1 + q_2) \\
      >l_1\sin{q_1} + (l_2/2)\sin(q_1 + q_2) \\
      >0
      >\end{bmatrix}
      >$$


2. #### 动能计算：

   1. 单个刚体的动能拆解
      刚体的动能由平动动能和转动动能组成：

   - **平动动能**(*Translational Kinetic Energy*)

   ​       显然有：
   $$
   E_T = \frac{1}{2}m_i \dot{\boldsymbol{r}}_i^{T} \dot{\boldsymbol{r}}_i
   $$

   ​       其中：
   $$
   \dot{\boldsymbol{r}}_i^T \dot{\boldsymbol{r}}_i = \|\dot{\boldsymbol{r}}_i\|^2
   $$

   - **转动动能**(*Rotational Kinetic Energy*)

   $$
   E_R = \frac{1}{2} \boldsymbol{\omega}_i^T \boldsymbol{I}_i \boldsymbol{\omega}_i
   $$

   ​       具体推导过程：

     > 设刚体由无数质点组成，第 $i$ 个质点的质量为 $m_i$，相对于旋转中心的位置向量为 $\boldsymbol{r}_i = [x_i, y_i, z_i]^T$；
     >
     > 刚体的角速度向量为 $\boldsymbol{\omega} = [\omega_x, \omega_y, \omega_z]^T$，表示绕 $x, y, z$ 轴的角速度；
     >
     > 质点的线速度为 $\boldsymbol{v}_i = \boldsymbol{\omega} \times \boldsymbol{r}_i$，其动能为 $T_i = \frac{1}{2} m_i \|\boldsymbol{v}_i\|^2$。
     >
     > 首先计算 $\|\boldsymbol{\omega} \times \boldsymbol{r}_i\|^2$。根据向量叉乘性质：
     > $$
     > \|\boldsymbol{a} \times \boldsymbol{b}\|^2 = \|\boldsymbol{a}\|^2 \|\boldsymbol{b}\|^2 - (\boldsymbol{a} \cdot \boldsymbol{b})^2
     > $$
     > 代入 $\boldsymbol{a} = \boldsymbol{\omega}, \boldsymbol{b} = \boldsymbol{r}_i$，得：
     > $$
     > \|\boldsymbol{\omega} \times \boldsymbol{r}_i\|^2 = (\omega_x^2 + \omega_y^2 + \omega_z^2)(x_i^2 + y_i^2 + z_i^2) - (\omega_x x_i + \omega_y y_i + \omega_z z_i)^2
     > $$
     > 展开右侧第二项：
     > $$
     > (\omega_x x_i + \omega_y y_i + \omega_z z_i)^2 = \omega_x^2 x_i^2 + \omega_y^2 y_i^2 + \omega_z^2 z_i^2 + 2\omega_x \omega_y x_i y_i + 2\omega_x \omega_z x_i z_i + 2\omega_y \omega_z y_i z_i
     > $$
     > 代入后整理：
     > $$
     > \|\boldsymbol{\omega} \times \boldsymbol{r}_i\|^2 = \omega_x^2(y_i^2 + z_i^2) + \omega_y^2(x_i^2 + z_i^2) + \omega_z^2(x_i^2 + y_i^2) - 2\omega_x \omega_y x_i y_i - 2\omega_x \omega_z x_i z_i - 2\omega_y \omega_z y_i z_i
     > $$
     > 刚体的总转动动能为所有质点动能之和：
     > $$
     > T_{\text{rot}} = \frac{1}{2} \sum_i m_i \|\boldsymbol{\omega} \times \boldsymbol{r}_i\|^2
     > $$
     > 将上一步的展开式代入，按 $\omega_x, \omega_y, \omega_z$ 的二次项和交叉项分组：
     > $$
     > T_{\text{rot}} = \frac{1}{2} \left[  \omega_x^2 \sum_i m_i (y_i^2 + z_i^2) +  \omega_y^2 \sum_i m_i (x_i^2 + z_i^2) +  \omega_z^2 \sum_i m_i (x_i^2 + y_i^2) -  2\omega_x \omega_y \sum_i m_i x_i y_i -  2\omega_x \omega_z \sum_i m_i x_i z_i -  2\omega_y \omega_z \sum_i m_i y_i z_i  \right]
     > $$
     > 根据惯性张量的定义，其元素为：
     >
     > - 主转动惯量：
     >   $$
     >   \begin{cases}
     >   I_{xx} = \sum_i m_i (y_i^2 + z_i^2) \\
     >   I_{yy} = \sum_i m_i (x_i^2 + z_i^2) \\
     >   I_{zz} = \sum_i m_i (x_i^2 + y_i^2) \\
     >   \end{cases}
     >   $$
     >
     > - 惯性积：
     >   $$
     >   \begin{cases}
     >   I_{xy} = I_{yx} = \sum_i m_i x_i y_i \\
     >   I_{xz} = I_{zx} = \sum_i m_i x_i z_i \\
     >   I_{yz} = I_{zy} = \sum_i m_i y_i z_i \\
     >   \end{cases}
     >   $$
     >   注意到惯性积前的负号，将求和式转化为惯性张量元素：
     >   $$
     >   T_{\text{rot}} = \frac{1}{2} \left[  I_{xx} \omega_x^2 + I_{yy} \omega_y^2 + I_{zz} \omega_z^2 -  2I_{xy} \omega_x \omega_y - 2I_{xz} \omega_x \omega_z - 2I_{yz} \omega_y \omega_z  \right]
     >   $$
     >   将上式写成矩阵乘法形式。惯性张量为对称矩阵：
     >   $$
     >   \boldsymbol{I} = \begin{bmatrix}  
     >   I_{xx} & -I_{xy} & -I_{xz} \\ 
     >   -I_{xy} & I_{yy} & -I_{yz} \\ 
     >   -I_{xz} & -I_{yz} & I_{zz}  
     >   \end{bmatrix}
     >   $$
     >   角速度向量为：
     >   $$
     >   \boldsymbol{\omega} = 
     >   \begin{bmatrix} 
     >   \omega_x \\ 
     >   \omega_y \\ 
     >   \omega_z 
     >   \end{bmatrix}
     >   $$
     >   计算二次型$\boldsymbol{\omega}^T \boldsymbol{I} \boldsymbol{\omega}$ :
     >   $$
     >   \boldsymbol{\omega}^T \boldsymbol{I} \boldsymbol{\omega} =  
     >   \begin{bmatrix} 
     >   \omega_x & \omega_y & \omega_z 
     >   \end{bmatrix}  
     >   \begin{bmatrix}  
     >   I_{xx} & -I_{xy} & -I_{xz} \\ 
     >   -I_{xy} & I_{yy} & -I_{yz} \\ 
     >   -I_{xz} & -I_{yz} & I_{zz}  
     >   \end{bmatrix}  
     >   \begin{bmatrix} 
     >   \omega_x \\ 
     >   \omega_y \\ 
     >   \omega_z 
     >   \end{bmatrix}
     >   $$
     >   展开乘积：
     >   $$
     >   \begin{split}
     >   \boldsymbol{\omega}^T \boldsymbol{I} \boldsymbol{\omega}
     >   &= \omega_x (I_{xx} \omega_x - I_{xy} \omega_y - I_{xz} \omega_z) 
     >   +  
     >   \omega_y (-I_{xy} \omega_x + I_{yy} \omega_y - I_{yz} \omega_z) 
     >   +  
     >   \omega_z (-I_{xz} \omega_x - I_{yz} \omega_y + I_{zz} \omega_z) \\
     >   &= I_{xx} \omega_x^2 + I_{yy} \omega_y^2 + I_{zz} \omega_z^2 - 2I_{xy} \omega_x \omega_y - 2I_{xz} \omega_x \omega_z - 2I_{yz} \omega_y \omega_z
     >   \end{split}
     >   $$
     >   对比转动动能表达式，可得：
     >   $$
     >   T_{\text{rot}} = \frac{1}{2} \boldsymbol{\omega}^T \boldsymbol{I} \boldsymbol{\omega}
     >   $$

   2. 广义坐标系到笛卡尔速度的映射：

      机械臂的广义坐标是**关节角$\textbf{q}$** , 但动能公式里的 $\dot{\boldsymbol{r}}_i$  (平动速度) 和$\boldsymbol{\omega}_i$ (角速度)是**笛卡尔速度**。需要通过雅可比矩阵，将关节角的变化率$\dot{\boldsymbol{q}}$ 映射到笛卡尔速度。

      - 平动雅可比$\boldsymbol{j}_i(\boldsymbol{q})$:

      $$
      \dot{\boldsymbol{r}}_i = \boldsymbol{J}_i(\boldsymbol{q}) \dot{\boldsymbol{q}}
      $$

      - 转动雅可比 $\boldsymbol{J}_{\omega i}(\boldsymbol{q})$:

      $$
      \boldsymbol{\omega}_i = \boldsymbol{J}_{\omega i}(\boldsymbol{q}) \dot{\boldsymbol{q}}
      $$

   3. 总动能的推导：

      机械臂的总动能是**所有刚体动能之和**：
      $$
      T = \sum_{i=1}^n T_i = 
      \sum_{i=1}^n \left( \frac{1}{2} m_i \dot{\boldsymbol{r}}_i^T \dot{\boldsymbol{r}}_i 
      + \frac{1}{2} \boldsymbol{\omega}_i^T \boldsymbol{I}_i \boldsymbol{\omega}_i \right)
      $$
      将**平动雅可比**和**转动雅可比**代入，替换 $\dot{\boldsymbol{r}}_i$ 和 $\boldsymbol{\omega}_i$：

      - 替换平动动能：

      $$
      \frac{1}{2} m_i \dot{\boldsymbol{r}}_i^T \dot{\boldsymbol{r}}_i = \frac{1}{2} m_i \left( \boldsymbol{J}_i \dot{\boldsymbol{q}} \right)^T \left( \boldsymbol{J}_i \dot{\boldsymbol{q}} \right)
      $$

      利用矩阵转置性质: 
      $$
      (\boldsymbol{A}\boldsymbol{B})^T = \boldsymbol{B}^T \boldsymbol{A}^T
      $$
      展开得：
      $$
      \frac{1}{2} m_i \dot{\boldsymbol{q}}^T \boldsymbol{J}_i^T \boldsymbol{J}_i \dot{\boldsymbol{q}}
      $$

      - 替换转动动能：

      $$
      \frac{1}{2} \boldsymbol{\omega}_i^T \boldsymbol{I}_i \boldsymbol{\omega}_i = \frac{1}{2} \left( \boldsymbol{J}_{\omega i} \dot{\boldsymbol{q}} \right)^T \boldsymbol{I}_i \left( \boldsymbol{J}_{\omega i} \dot{\boldsymbol{q}} \right)
      $$

      同样展开转置：
      $$
      \frac{1}{2} \dot{\boldsymbol{q}}^T \boldsymbol{J}_{\omega i}^T \boldsymbol{I}_i \boldsymbol{J}_{\omega i} \dot{\boldsymbol{q}}
      $$


      最后，总动能整合：

      将所有刚体的平动、转动动能项相加：
      $$
      T = \sum_{i=1}^n \left[ \frac{1}{2} m_i \dot{\boldsymbol{q}}^T \boldsymbol{J}_i^T \boldsymbol{J}_i \dot{\boldsymbol{q}} + \frac{1}{2} \dot{\boldsymbol{q}}^T \boldsymbol{J}_{\omega i}^T \boldsymbol{I}_i \boldsymbol{J}_{\omega i} \dot{\boldsymbol{q}} \right]
      $$
      提取公因子：
      $$
      T = \frac{1}{2} \dot{\boldsymbol{q}}^T \left( \sum_{i=1}^n \left[ m_i \boldsymbol{J}_i^T \boldsymbol{J}_i + \boldsymbol{J}_{\omega i}^T \boldsymbol{I}_i \boldsymbol{J}_{\omega i} \right] \right) \dot{\boldsymbol{q}}
      $$
      定义**惯性矩阵**$\boldsymbol{M}(\boldsymbol{q})$:
      $$
      \boldsymbol{M}(\boldsymbol{q}) = \sum_{i=1}^n \left( m_i \boldsymbol{J}_i^T \boldsymbol{J}_i + \boldsymbol{J}_{\omega i}^T \boldsymbol{I}_i \boldsymbol{J}_{\omega i} \right)
      $$
      因此，总动能最终表示为**广义坐标速度的二次型**：
      $$
      T = \frac{1}{2} \dot{\boldsymbol{q}}^T \boldsymbol{M}(\boldsymbol{q}) \dot{\boldsymbol{q}}
      $$

   ​      

3. #### 重力势能计算：

第 i 个连杆的质心在基坐标系中的 **z 坐标** 为 $z_i(\boldsymbol{q})$（高度），因此其重力势能为：
$$
E_{p,i} = m_i g z_i(\boldsymbol{q})
$$

- $m_i$：第 $i$ 个连杆的质量；
- $z_i(\boldsymbol{q})$：质心高度，是广义坐标 $\boldsymbol{q} = [q_1, q_2, \dots, q_n]^T$ 的函数（关节角变化会带动连杆运动，进而改变 $z_i$）。

合成总势能：
$$
V = \sum_{i=1}^n E_{p,i} = \sum_{i=1}^n m_i g z_i(\boldsymbol{q})
$$
重力向量 $\boldsymbol{G(q)}$:
$$
\boldsymbol{G}(\boldsymbol{q}) = 
\frac{\partial V}{\partial \boldsymbol{q}} = 
\left[
\frac{\partial V}{\partial q_1}, \frac{\partial V}{\partial q_2}, \dots, \frac{\partial V}{\partial q_n} 
\right]^T
$$

推导示例（以单关节机械臂为例）：

> 假设机械臂只有 1 个关节$n=1$，连杆长度为 $l$，关节角为 $q_1$，质心位于连杆中点，则质心高度：
> $$
> z_1(q_1) = \frac{l}{2} \sin(q_1)
> $$
> 总势能：
> $$
> V = m_1 g \cdot \frac{l}{2} \sin(q_1)
> $$
> 重力向量（1维）：
> $$
> G_1 = \frac{\partial V}{\partial q_1} = m_1 g \cdot \frac{l}{2} \cos(q_1)
> $$
> **物理意义**：
>
> - 当 $q_1 = 0^\circ$ (连杆水平)：$：\cos(0^\circ) = 1,G_1 = m_1 g l/2$ （重力矩使连杆向下摆）；
> - 当 $q_1 = 90^\circ$（连杆竖直向上）：$\cos(90^\circ) = 0，G_1 = 0$（质心在关节正上方，重力矩为零）。
>
> 多关节推广：
>
> 对于 $n$ 关节机械臂，每个关节角 $q_j$ 会影响多个连杆的质心高度 $z_i(\boldsymbol{q})$（因为连杆间通过关节连接，一个关节的运动可能带动后续所有连杆运动）。因此，计算 $\frac{\partial V}{\partial q_j}$ 时，需要对所有连杆的 $z_i(\boldsymbol{q})$ 关于 $q_j$ 求偏导，再叠加：
> $$
> G_j = \frac{\partial V}{\partial q_j} = \sum_{i=1}^n m_i g \cdot \frac{\partial z_i(\boldsymbol{q})}{\partial q_j}
> $$

4. #### 拉格朗日方程代入：

   1. ##### 拉格朗日方程的一般形式

      对于一个自由度为 $n$ 的系统，其拉格朗日方程为：

   $$
   \frac{\mathrm{d}}{\mathrm{d}t}(\frac{\partial{ \mathcal{L} }}{ \partial{\dot{\boldsymbol{q}}} })
   - \frac{ \partial{ \mathcal{L} } }{ \partial{ \boldsymbol{q} } } 
   = \boldsymbol{ \tau } \,+\, \boldsymbol{\tau}_d
   $$

   其中：

   -  $\mathcal{\boldsymbol{L}} = \boldsymbol{T} - \boldsymbol{V}$ 为拉格朗日函数；
   -  $\boldsymbol{\tau}$ 为关节驱动力矩（广义力）；
   -  $\boldsymbol{\tau}_d$ 为外部干扰力矩。

   2. ##### 计算$\frac{\partial{\mathcal{\boldsymbol{L}}}}{\partial{\dot{\boldsymbol{q}}}}$

      展开拉格朗日函数：

   $$
   \frac{\partial(\boldsymbol{\mathcal{L}})}{\partial{\dot{\boldsymbol{q}}}} 
   = \frac{\partial{(T - V)}}{\partial{\dot{\boldsymbol{q}}}}
   = \frac{\partial{T}}{\partial{\dot{\boldsymbol{q}}}} - \frac{\partial{V}}{\partial{\dot{\boldsymbol{q}}}}
   $$

   - 势能 $V$ 与速度 $\dot{\boldsymbol{q}}$ 无关，故势能关于速度的偏导数 $\frac{\partial{V}}{\partial{\dot{\boldsymbol{q}}}} = 0$ ;

   - 动能 $T = \frac{1}{2}\boldsymbol{x^TAx}$ , 有：
     $$
     \frac{\partial T}{\partial \dot{\boldsymbol{q}}} = \boldsymbol{M}(\boldsymbol{q}) \dot{\boldsymbol{q}}
     $$
     代入 $\boldsymbol{x = \dot{q}}$ , $\boldsymbol{A = M(q)}$, 可得：
     $$
     \frac{\partial{T}}{\partial{\dot{\boldsymbol{q}}}} = \boldsymbol{M(q)\dot{q}}
     $$
     因此：
     $$
     \frac{\partial(\boldsymbol{\mathcal{L}})}{\partial{\dot{\boldsymbol{q}}}}
     = \boldsymbol{M(q)\dot{q}}
     $$

   3. ##### 对拉格朗日函数关于时间求导：

      $$
      \begin{split}
      \frac{\mathrm{d}}{\mathrm{d}t}
      \left(
      \frac{\partial(\boldsymbol{\mathcal{L}})}{\partial{\dot{\boldsymbol{q}}}}
      \right) 
      &= \frac{\mathrm{d}}{\mathrm{d}t}
      \left(
      \boldsymbol{M(q)\dot{q}}
      \right) \\
      &= \boldsymbol{ \dot{M}(q)\dot{q} }
      + \boldsymbol{M(q)\ddot{q}}
      \end{split}
      $$

      其中，$\dot{\boldsymbol{M}}(\boldsymbol{q})$ 是惯性矩阵 $\boldsymbol{M}$ 的时间导数，由 $\boldsymbol{q}(t)$ 变化引起，通过链式法则计算：$\dot{\boldsymbol{M}} = \sum_{j=1}^n \frac{\partial \boldsymbol{M}}{\partial q_j} \dot{q}_j$
      （即 $\boldsymbol{M}$对每个广义坐标 $q_j$ 的偏导数乘以 $\dot{q}_j$，再求和）。

   4. ##### 计算 $\frac{\partial{\mathcal{L}}}{\partial{\boldsymbol{q}}}$ :

      $$
      \begin{split}
      
      \frac{\partial{\mathcal{L}}}{\partial{\boldsymbol{q}}} 
      &= \frac{\partial{(T - V)}}{\partial{\boldsymbol{q}}} \\
      
      &= \frac{\partial{T}}{\partial{\boldsymbol{q}}} 
      -\frac{\partial{V}}{\partial{\boldsymbol{q}}} \\
      
      &= \frac{\partial}{\partial{\boldsymbol{q}}}
      \left(
      \frac{1}{2} \boldsymbol{x^TA(q)x}
      \right)
      - \boldsymbol{G(q)} \\
      
      &= \frac{1}{2} \boldsymbol{
      x^T \frac{\partial{\boldsymbol{A}}}{\partial{\boldsymbol{q}}} x
      }
      - \boldsymbol{G(q)} \\
      
      \end{split}
      $$

      代入 $\boldsymbol{x} = \dot{\boldsymbol{q}}$，$\boldsymbol{A} = \boldsymbol{M}(\boldsymbol{q})$，得：
      $$
      \frac{\partial{\mathcal{L}}}{\partial{\boldsymbol{q}}}
      = \frac{1}{2} \dot{\boldsymbol{q}}^T \frac{\partial \boldsymbol{M}}{\partial \boldsymbol{q}} \dot{\boldsymbol{q}}
      -\boldsymbol{G(q)}
      $$

      > 其中 $\frac{\partial \boldsymbol{M}}{\partial \boldsymbol{q}}$ 是一个 $n \times n \times n$ 的三阶张量（对每个 $q_j$，$\frac{\partial \boldsymbol{M}}{\partial q_j}$ 是 $n×n$ 矩阵）
      >
      > 表示 $\boldsymbol{M}$ 随每个 $q_j$ 的变化率。

   5. ##### 代入拉格朗日函数：

      将前三步结果代入方程：
      $$
      \underbrace{
      \dot{\boldsymbol{M}}(\boldsymbol{q})\dot{\boldsymbol{q}} 
      + \boldsymbol{M}(\boldsymbol{q}) \ddot{\boldsymbol{q}}}
      _{\frac{d}{dt}
      \left( 
      \frac{\partial L}{\partial \dot{\boldsymbol{q}}} 
      \right)} 
      
      - \underbrace{
      \left( 
      \frac{1}{2} \dot{\boldsymbol{q}}^T \frac{\partial \boldsymbol{M}}{\partial \boldsymbol{q}} \dot{\boldsymbol{q}} 
      - \boldsymbol{G}(\boldsymbol{q}) 
      \right)}
      _{\frac{\partial L}{\partial \boldsymbol{q}}} 
      
      = \boldsymbol{\tau} + \boldsymbol{\tau}_d
      $$
      移项后：
      $$
      \boldsymbol{M}(\boldsymbol{q}) \ddot{\boldsymbol{q}} 
      + \dot{\boldsymbol{M}}(\boldsymbol{q}) \dot{\boldsymbol{q}} 
      - \frac{1}{2} \dot{\boldsymbol{q}}^T \frac{\partial \boldsymbol{M}}{\partial \boldsymbol{q}} \dot{\boldsymbol{q}} 
      + \boldsymbol{G}(\boldsymbol{q}) 
      = \boldsymbol{\tau} + \boldsymbol{\tau}_d
      $$

   6. ##### 构造科里奥利矩阵$C$以简化拉格朗日方程：

      已知惯性矩阵关于时间的导数为：
      $$
      \dot{\boldsymbol{M}} = \sum_{j=1}^n \frac{\partial \boldsymbol{M}}{\partial q_j} \dot{q}_j
      $$
      其中，$\frac{\partial \boldsymbol{M}}{\partial q_j}$ 表示 $\boldsymbol{M}$ 对第 $j$ 个关节角的偏导数，$\dot{q}_j$ 为关节速度。

      对任意向量 $\boldsymbol{v} \in \mathbb{R}^n$，有：
      $$
      \boldsymbol{v}^T \dot{\boldsymbol{M}} \boldsymbol{v} = \boldsymbol{v}^T \left( \sum_{j=1}^n \frac{\partial \boldsymbol{M}}{\partial q_j} \dot{q}_j \right) \boldsymbol{v} = \sum_{j=1}^n \dot{q}_j \boldsymbol{v}^T \frac{\partial \boldsymbol{M}}{\partial q_j} \boldsymbol{v}
      $$
      由于 $M$ 是实对称矩阵，其偏导数满足：
      $$
      \frac{\partial M_{ik}}{\partial q_j} = \frac{\partial M_{ki}}{\partial q_j}
      $$
      故其二次型可展开为：
      $$
      \boldsymbol{v}^T \frac{\partial \boldsymbol{M}}{\partial q_j} \boldsymbol{v} 
      = \sum_{i=1}^n \sum_{k=1}^n v_i v_k \frac{\partial M_{ik}}{\partial q_j} 
      = \sum_{i=1}^n \sum_{k=1}^n v_i v_k \frac{\partial M_{ki}}{\partial q_j}
      $$
      构造矩阵 $\boldsymbol{C}$，使 $\dot{\boldsymbol{M}} - 2\boldsymbol{C}$ 为反对称矩阵（即 $(\dot{\boldsymbol{M}} - 2\boldsymbol{C})^T = -(\dot{\boldsymbol{M}} - 2\boldsymbol{C})$），从而对任意向量 $\boldsymbol{v}$，有：
      $$
      \boldsymbol{v}^T (\dot{\boldsymbol{M}} - 2\boldsymbol{C}) \boldsymbol{v} = 0 
      \quad \Rightarrow \quad 
      \boldsymbol{v}^T \dot{\boldsymbol{M}} \boldsymbol{v} 
      = 2\boldsymbol{v}^T \boldsymbol{C} \boldsymbol{v}
      $$
      矩阵元素的定义和其反对称性的验证：

      > - 显式定义：
      >
      > 设 $\boldsymbol{C}$ 的元素为 $C_{ij}$，则对任意 $i, j$，根据反对称性条件：
      > $$
      > \dot{M}_{ij} - 2C_{ij} = -(\dot{M}_{ji} - 2C_{ji})
      > $$
      > 因 $\boldsymbol{M}$ 对称，$\dot{M}_{ij} = \dot{M}_{ji}$，代入得：
      > $$
      > C_{ji} = C_{ij}
      > $$
      > 即 $\boldsymbol{C}$ 为对称矩阵。进一步，代入：
      > $$
      > \dot{M}_{ij} = \sum_{k=1}^n \frac{\partial M_{ij}}{\partial q_k} \dot{q}_k
      > $$
      > 定义：
      > $$
      > C_{ij} = \frac{1}{2} \sum_{k=1}^n \left( \frac{\partial M_{ik}}{\partial q_j} + \frac{\partial M_{jk}}{\partial q_i} \right) \dot{q}_k
      > $$
      >
      > - 反对称性验证：
      >
      > 构造矩阵 $\boldsymbol{S} = \dot{\boldsymbol{M}} - 2\boldsymbol{C}$，其元素：
      > $$
      > S_{ij} = \dot{M}_{ij} - 2C_{ij} 
      > = \sum_{k=1}^n \frac{\partial M_{ij}}{\partial q_k} \dot{q}_k 
      > - \sum_{k=1}^n 
      > \left( 
      > \frac{\partial M_{ik}}{\partial q_j} + \frac{\partial M_{jk}}{\partial q_i} 
      > \right) 
      > \dot{q}_k
      > $$
      > 交换 $i, j$：
      > $$
      > \begin{split}
      > 
      > S_{ji} 
      > 
      > &= \sum_{k=1}^n \frac{\partial M_{ji}}{\partial q_k} \dot{q}_k 
      > - \sum_{k=1}^n 
      > \left( 
      > \frac{\partial M_{jk}}{\partial q_i} + \frac{\partial M_{ik}}{\partial q_j} 
      > \right) 
      > \dot{q}_k \\
      > 
      > &= \sum_{k=1}^n \frac{\partial M_{ij}}{\partial q_k} \dot{q}_k 
      > - \sum_{k=1}^n 
      > \left( 
      > \frac{\partial M_{jk}}{\partial q_i} + \frac{\partial M_{ik}}{\partial q_j} 
      > \right) 
      > \dot{q}_k \\
      > 
      > &= -S_{ij}
      > 
      > \end{split}
      > $$
      > 故 $\boldsymbol{S}$ 是反对称矩阵，满足 $\boldsymbol{v}^T \boldsymbol{S} \boldsymbol{v} = 0$，即 
      > $$
      > \boldsymbol{v}^T \dot{\boldsymbol{M}} \boldsymbol{v} = 2\boldsymbol{v}^T \boldsymbol{C} \boldsymbol{v}
      > $$

      在拉格朗日方程推导中，已得到：
      $$
      \boldsymbol{M}(\boldsymbol{q}) \ddot{\boldsymbol{q}} 
      + \dot{\boldsymbol{M}}(\boldsymbol{q}) \dot{\boldsymbol{q}} 
      - \frac{1}{2} \dot{\boldsymbol{q}}^T \frac{\partial \boldsymbol{M}}{\partial \boldsymbol{q}} \dot{\boldsymbol{q}} 
      + \boldsymbol{G}(\boldsymbol{q}) 
      = \boldsymbol{\tau} + \boldsymbol{\tau}_d
      $$
      利用 $\dot{\boldsymbol{M}} \dot{\boldsymbol{q}} = 2\boldsymbol{C} \dot{\boldsymbol{q}}$ 替换其中关键项：$\dot{\boldsymbol{M}} \dot{\boldsymbol{q}}-\frac{1}{2} \dot{\boldsymbol{q}}^T \frac{\partial \boldsymbol{M}}{\partial \boldsymbol{q}} \dot{\boldsymbol{q}}$ 

      对于右侧二次型，我们展开后有：
      $$
      \frac{1}{2} 
      \dot{\boldsymbol{q}}^T 
      \frac{\partial \boldsymbol{M}}{\partial \boldsymbol{q}} 
      \dot{\boldsymbol{q}} 
      
      = \frac{1}{2} 
      \sum_{j=1}^n \dot{q}_j \dot{\boldsymbol{q}}^T \frac{\partial \boldsymbol{M}}{\partial q_j} \dot{\boldsymbol{q}}
      
      = \frac{1}{2} 
      \sum_{i,k,j=1}^n \dot{q}_i \dot{q}_k 
      \frac{\partial M_{ik}}{\partial q_j} 
      \dot{q}_j
      $$
      而对于 $2\boldsymbol{C} \dot{\boldsymbol{q}}$ 的元素,有：
      $$
      (2\boldsymbol{C} \dot{\boldsymbol{q}})_i 
      = 2\sum_{j=1}^n C_{ij} \dot{q}_j 
      = \sum_{j,k=1}^n 
      \left( 
      \frac{\partial M_{ik}}{\partial q_j} + \frac{\partial M_{jk}}{\partial q_i} 
      \right) 
      \dot{q}_j \dot{q}_k
      $$
      注意到：
      $$
      \sum_{i,k,j} \dot{q}_i \dot{q}_k \frac{\partial M_{ik}}{\partial q_j} \dot{q}_j 
      = \boldsymbol{v}^T \dot{\boldsymbol{M}} \boldsymbol{v}
      \quad \quad
      (\boldsymbol{v}=\dot{\boldsymbol{q}})
      $$
      且：
      $$
      \sum_{i,k,j} \dot{q}_i \dot{q}_k \frac{\partial M_{jk}}{\partial q_i} \dot{q}_j 
      = \sum_{j,k,i} \dot{q}_j \dot{q}_k \frac{\partial M_{jk}}{\partial q_i} \dot{q}_i 
      = \boldsymbol{v}^T \dot{\boldsymbol{M}} \boldsymbol{v}
      $$
      因此：
      $$
      2\boldsymbol{C} \dot{\boldsymbol{q}} 
      - \frac{1}{2} \dot{\boldsymbol{q}}^T \frac{\partial \boldsymbol{M}}{\partial \boldsymbol{q}} \dot{\boldsymbol{q}} 
      = \frac{1}{2} \dot{\boldsymbol{M}} \dot{\boldsymbol{q}} 
      = \boldsymbol{C} \dot{\boldsymbol{q}}
      $$
      最终可将拉格朗日方程简化为:
      $$
      \boldsymbol{M}(\boldsymbol{q}) \ddot{\boldsymbol{q}} 
      + \boldsymbol{C}(\boldsymbol{q}, \dot{\boldsymbol{q}}) \dot{\boldsymbol{q}} 
      + \boldsymbol{G}(\boldsymbol{q}) 
      = \boldsymbol{\tau} + \boldsymbol{\tau}_d
      $$
      上式物理量含义：

      - **惯性项 $\boldsymbol{M}(\boldsymbol{q}) \ddot{\boldsymbol{q}}$**：关节加速度引起的惯性力矩，与关节位置 $\boldsymbol{q}$ 相关（耦合效应）；
      - **科里奥利与离心力项 $\boldsymbol{C}(\boldsymbol{q}, \dot{\boldsymbol{q}}) \dot{\boldsymbol{q}}$**：关节速度引起的非线性力矩（如高速转动时的离心力、关节间相对运动的科里奥利力）；
      - **重力项 $\boldsymbol{G}(\boldsymbol{q})$**：重力对关节的静力矩，仅与关节位置有关；
      - **输入项 $\boldsymbol{\tau} + \boldsymbol{\tau}_d$**：控制输入力矩与外部干扰力矩。

   7. ##### 单关节机械臂的拉格朗日方程（实例参考）：

      >  - **系统参数定义**：
      >
      >  广义坐标：关节角度 $q$
      >
      >  系统参数：连杆质量 $m$, 质心到关节的距离 $l_c$ , 连杆绕关节的转动惯量 $I$ , 重力加速度 $g$ , 关节驱动力矩 $\tau$ . 
      >
      >  - **计算动能 $T$**：
      >
      >  对于单关节转动系统，动能仅包含转动部分：
      >  $$
      >  T = \frac{1}{2}I \dot{\boldsymbol{q}}^2
      >  $$
      >  其中， $I$ 是连杆绕关节的转动惯量。
      >
      >  - **计算势能 $V$**:
      >
      >  假设重力方向竖直向下，则势能由重力场中的高度决定：
      >  $$
      >  V = mgl_c \cos{q}
      >  $$
      >
      >  - **计算拉格朗日量 $\mathcal{L}$**:
      >    $$
      >    \mathcal{L} = T - V = \frac{1}{2}I \dot{\boldsymbol{q}}^2 + mgl_c \cos{q}
      >    $$
      >
      >  - **应用拉格朗日方程**：
      >
      >  拉格朗日方程为：
      >  $$
      >  \frac{d}{dt} \left( \frac{\partial L}{\partial \dot{q}} \right) - \frac{\partial L}{\partial q} = \tau
      >  $$
      >  其中：
      >  $$
      >  \frac{\partial L}{\partial \dot{q}} 
      >  = \frac{\partial}{\partial \dot{q}} \left( \frac{1}{2} I \dot{q}^2 - m g l_c \cos q \right) 
      >  = I \dot{q} \\
      >  \frac{d}{dt} \left( \frac{\partial L}{\partial \dot{q}} \right) = \frac{d}{dt} (I \dot{q}) = I \ddot{q}
      >  $$
      >  且：
      >  $$
      >  \frac{\partial L}{\partial q} 
      >  = \frac{\partial}{\partial q} 
      >  \left( 
      >  \frac{1}{2} I \dot{q}^2 - m g l_c \cos q 
      >  \right) 
      >  = m g l_c \sin q
      >  $$
      >  代入拉格朗日方程后整理可得：
      >  $$
      >  I \ddot{q} + m g l_c \sin q = \tau
      >  $$

## References:

1. [机器人正向运动学和D-H参数方法_d-h参数法-CSDN博客](https://blog.csdn.net/hangl_ciom/article/details/102752733)
2. [【Manim/熟肉】拉格朗日方程推导_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV15fZuYqECc/?spm_id_from=333.337.search-card.all.click&vd_source=d0006d4c5a92099a63347c8a3f73a055)
3. [【大学物理】科里奥利力的矩阵形式推导 - 知乎](https://zhuanlan.zhihu.com/p/704768630)
4. [干货 | 机械臂的动力学（二）：拉格朗日法 - 知乎](https://zhuanlan.zhihu.com/p/341843051)
5. [转动惯量、惯性张量、转动动能的推导 - 知乎](https://zhuanlan.zhihu.com/p/672567095)
6. [机器人动力学建模之理解惯性张量-CSDN博客](https://blog.csdn.net/handsome_for_kill/article/details/104615496)
7. [刚体（1）：惯量张量 - 知乎](https://zhuanlan.zhihu.com/p/553157542)
8. [LaTeX 公式篇 - 知乎](https://zhuanlan.zhihu.com/p/110756681)
9. [LaTeX新手半小时速成手册（不速成你打我_overleaf 另起一页-CSDN博客](https://blog.csdn.net/weixin_43301333/article/details/106365391)
10. [Markdown 基本语法 | Markdown 教程](https://markdown.com.cn/basic-syntax/)

