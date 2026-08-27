<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M8 21h8a5 5 0 0 0 5-5v-3a3 3 0 0 0-3-3h-1V8a5 5 0 0 0-5-5H8a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5M7 8.5A1.5 1.5 0 0 1 8.5 7h3a1.5 1.5 0 0 1 0 3h-3A1.5 1.5 0 0 1 7 8.5m0 7A1.5 1.5 0 0 1 8.5 14h7a1.5 1.5 0 1 1 0 3h-7A1.5 1.5 0 0 1 7 15.5\"/>";
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
