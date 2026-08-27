<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M4 6h16M6 12h11m-8 6h2m7.42-2.39a2.09 2.09 0 0 1 1.485-.615 2.1 2.1 0 0 1 1.485.615 2.1 2.1 0 0 1 0 2.97L18 22h-3v-3z\"/>";
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
