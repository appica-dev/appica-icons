<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3.5 7.75V5.625A2.125 2.125 0 0 1 5.625 3.5H7.75M3.5 16.25v2.125A2.125 2.125 0 0 0 5.625 20.5H7.75m8.5-17h2.125A2.125 2.125 0 0 1 20.5 5.625V7.75M16.25 20.5h2.125a2.125 2.125 0 0 0 2.125-2.125V16.25m-4.25 0-2.656-2.656M7.75 10.938a3.187 3.187 0 1 0 6.375 0 3.187 3.187 0 0 0-6.375 0\"/>";
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
