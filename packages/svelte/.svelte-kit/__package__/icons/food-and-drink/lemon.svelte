<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M5.868 15.06a6.5 6.5 0 0 0 9.192 0m0 0a6.5 6.5 0 0 0 0-9.192m0 9.192-4.596-4.596m0 0v6.364m0-6.364h6.364m.708-7.071c3.905 3.906 3.905 10.237 0 14.143-3.906 3.905-10.237 3.905-14.143 0z\"/>";
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
