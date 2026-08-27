<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m12 2.25-.234.004a6.72 6.72 0 0 0-4.62 2.08A6.87 6.87 0 0 0 5.25 9.075v5.85c0 1.81.711 3.546 1.977 4.826A6.71 6.71 0 0 0 12 21.75l.234-.004a6.72 6.72 0 0 0 4.62-2.08 6.87 6.87 0 0 0 1.896-4.741v-5.85c0-1.81-.711-3.546-1.977-4.826A6.71 6.71 0 0 0 12 2.25\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  {...props}
/>
