<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M13.048 17.942q-.523.059-1.048.058-5.4 0-9-6 3.6-6 9-6t9 6a18 18 0 0 1-1.362 1.975M22 22l-5-5m0 5 5-5m-12-5a2 2 0 1 0 4 0 2 2 0 0 0-4 0\"/>";
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
