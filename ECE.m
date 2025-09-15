V = [0.000538, 0.499, 0.991, 1.493, 1.998, 2.497, 2.996, 3.487, 3.993, 4.419, 4.968];
I = [-0.0000005, 0.499, 1.0003, 1.501, 2.002, 2.503, 3.0041, 3.505, 4.006, 4.509, 5.0102];

figure;
plot(V, I, 'o', 'MarkerFaceColor','b'); % data points
xlabel('Voltage (V)');
ylabel('Current (mA)');
title('I-V Curve of 1K Ohm Resistor');
grid on;
hold on;

% Fit a line (linear regression: I = m*V + b)
coeffs = polyfit(V, I, 1);  % degree 1 polynomial
m = coeffs(1);  % slope
b = coeffs(2);  % intercept

% Generate best-fit line
V_fit = linspace(min(V), max(V), 100);
I_fit = polyval(coeffs, V_fit);

% Plot best-fit line
plot(V_fit, I_fit, 'r-', 'LineWidth',1.5);
legend('Measured Data','Best Fit Line');

% Display equation of line
fprintf('Best fit line: I = %.6f*V + %.6f\n', m, b);