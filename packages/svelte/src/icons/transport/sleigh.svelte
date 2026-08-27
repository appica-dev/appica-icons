<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3 19h15a4 4 0 0 0 4-4M7 15h9a3 3 0 0 0 3-3v-1.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 0 1-2-2V8H8.485a6 6 0 0 1-4.242-1.757L3 5v6a4 4 0 0 0 4 4m0 0v4m8-4v4\"/>";
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
