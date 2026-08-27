<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3 12h6m12 0h-6m-3-9v6m0 6v6M5.636 5.636l4.243 4.243m8.485 8.485-4.243-4.243m4.243-8.485-4.243 4.243m-4.242 4.242-4.243 4.243\"/>";
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
