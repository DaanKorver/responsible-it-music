<div></div>

<style>
  div {
    --color: var(--primary);
    width: 2rem;
    height: 2rem;
    border: 3px solid transparent;
    border-top: 3px solid var(--color);
    border-radius: 50%;
    animation: load 1s forwards infinite ease-out;
  }

  @keyframes load {
    0% { transform: rotate(0deg) }
    100% { transform: rotate(360deg) }
  }
</style>