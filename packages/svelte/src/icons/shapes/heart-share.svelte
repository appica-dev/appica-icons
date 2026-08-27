<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m19.501 12.578-.468.464m-6.072 6.015-.954.944-7.495-7.423a4.997 4.997 0 1 1 7.495-6.562 4.996 4.996 0 1 1 7.494 6.568M16.004 22 21 17.003m0 0V21.5m0-4.497h-4.497\"/>";
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
