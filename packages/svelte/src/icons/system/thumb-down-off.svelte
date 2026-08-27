<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M7 13V7m0 6H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m3 9a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-3m2-2h1a2 2 0 0 0 2-2l-1-5c-.295-1.26-1.11-2.076-2-2h-7c-.57 0-1.102.159-1.556.434M3 3l18 18\"/>";
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
