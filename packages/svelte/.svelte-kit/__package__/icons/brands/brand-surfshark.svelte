<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M8 16h.452c1.943.007 3.526-1.461 3.543-3.286v-2.428c.018-1.828 1.607-3.298 3.553-3.286H16m3.954 2.447c-.237-6.217 0-6.217-6-6.425-5.774-.208-6.824 1-7.91 5.382C3.16 20.22 2.2 23.12 10.836 19.602c9.392-3.831 9.297-5.382 9.114-10.155z\"/>";
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
