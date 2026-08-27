<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M21 12.8c-.523-.502-1.172-.8-1.875-.8C17.398 12 16 13.791 16 16s1.398 4 3.125 4c.703 0 1.352-.298 1.874-.8M15 16h4M7 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0m0 0h8M7 5v8a3 3 0 0 0 3 3h1m4-11a2 2 0 1 0 4 0 2 2 0 0 0-4 0\"/>";
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
