<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m17.515 6.485-.996.996M3.072 20.928q-.995-.995 11.739-16.643a3.486 3.486 0 1 1 5.058 4.772Q4.069 21.925 3.072 20.928\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  fill={"none"}
  stroke={"currentColor"}
  stroke-width={"1.5"}
  stroke-linecap={"round"}
  stroke-linejoin={"round"}
  {...props}
/>
