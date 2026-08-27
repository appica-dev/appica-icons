<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M4.99 5.198a9.767 9.767 0 1 1 13.811 13.81A9.767 9.767 0 0 1 4.991 5.2m7.883 3.976a.977.977 0 0 0-1.953 0v1.953H8.968a.977.977 0 0 0 0 1.954h1.953v1.953a.976.976 0 1 0 1.953 0v-1.953h1.953a.977.977 0 0 0 0-1.954h-1.953z\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  {...props}
/>
