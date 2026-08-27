<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M19.007 16.466A6 6 0 0 0 15 6H4m0 0 3 3M4 6l3-3M6 20h1.5a1.5 1.5 0 1 0 0-3H6v-3h3m3 1.5v3a1.5 1.5 0 1 0 3 0v-3a1.5 1.5 0 1 0-3 0\"/>";
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
