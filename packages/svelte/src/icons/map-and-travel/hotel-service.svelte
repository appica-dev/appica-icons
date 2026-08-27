<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M8.5 10A1.5 1.5 0 0 1 7 8.5a5.5 5.5 0 1 1 11 0V19a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-2c0-1.38.71-2.444 1.88-3.175l4.424-2.765C14.359 10.4 15 9.744 15 8.5a2.5 2.5 0 0 0-5 0A1.5 1.5 0 0 1 8.5 10\"/>";
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
