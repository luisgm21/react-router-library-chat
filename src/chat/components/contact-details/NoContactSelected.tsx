const NoContactSelected = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="text-center space-y-4">
        <div className="text-6xl mb-4">👥</div>
        <h1 className="text-3xl font-bold text-slate-800">
          Selecciona un contacto
        </h1>
        <p className="text-slate-600 text-lg max-w-md">
          Elige un contacto de la lista para comenzar a chatear
        </p>
      </div>
    </div>
  );
};

export default NoContactSelected;