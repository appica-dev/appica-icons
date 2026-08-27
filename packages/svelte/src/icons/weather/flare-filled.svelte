<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M11.129 2.788a.975.975 0 0 1 1.743 0l2.78 5.559 5.559 2.78a.975.975 0 0 1 .107 1.682l-.107.062-5.56 2.78-2.778 5.559a.975.975 0 0 1-1.683.107l-.061-.107-2.78-5.56-5.56-2.778a.975.975 0 0 1-.106-1.683l.107-.062 5.558-2.78z\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  {...props}
/>
