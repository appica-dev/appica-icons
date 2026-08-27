<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M9 9v6m-6-3v.01M21 12v.01M12 21v.01M7.5 4.2v.01m9 15.59v.01m-9-.01v.01M4.2 16.5v.01m15.6-.01v.01M4.2 7.5v.01m15.61.017A9 9 0 0 0 12 3m0 8v2a2 2 0 0 0 4 0v-2a2 2 0 1 0-4 0\"/>";
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
