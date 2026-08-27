<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M5.007 16.478A6 6 0 0 1 9 6h11m0 0-3 3m3-3-3-3M9 20h1.5a1.5 1.5 0 1 0 0-3H9v-3h3m3 1.5v3a1.5 1.5 0 1 0 3 0v-3a1.5 1.5 0 0 0-3 0\"/>";
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
