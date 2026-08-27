<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M10 12v7a2 2 0 0 0 4 0v-7m6-.9C20 6.626 16.418 3 12 3s-8 3.626-8 8.1a.9.9 0 0 0 .9.9h14.2a.9.9 0 0 0 .9-.9\"/>";
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
