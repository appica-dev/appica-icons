<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 10.174Q14.65 5.999 16.648 6c2 0 3.263 2.213 4 5.217.704 2.869.5 6.783-2 6.783-1.114 0-2.648-1.565-4.148-3.652a27.6 27.6 0 0 1-2.5-4.174m0 0Q9.351 5.999 7.352 6c-2 0-3.263 2.213-4 5.217-.704 2.869-.5 6.783 2 6.783C6.466 18 8 16.435 9.5 14.348q1.5-2.087 2.5-4.174\"/>";
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
